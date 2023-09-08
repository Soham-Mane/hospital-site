from django.shortcuts import render,redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth.hashers import make_password,check_password
from django.core.mail import send_mail
from django.http import HttpResponse
from django.core.exceptions import ObjectDoesNotExist
# Create your views here.
from rest_framework import viewsets
from .models import patient,appointment
from .serializers import PatientsSerializer
import pyotp


class PatientsViewSet(viewsets.ModelViewSet):
    queryset = patient.objects.all()
    serializer_class = PatientsSerializer

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        email = request.POST.get('email')
        gender = request.POST.get('gender')
        age = request.POST.get('age')
        phone = request.POST.get('phone')
        address = request.POST.get('address')

        if patient.objects.filter(username=username).exists():
            return JsonResponse({"message": "Sign-up failed, username already exists"})
        
        new_patient = patient(
            username=username,
            password=make_password(password),
            email=email,
            gender=gender,
            age=age,    
            phone=phone,
            address=address
        )

        new_patient.save()
        return JsonResponse({"success": "Sign-up successful"})
    else:
        return JsonResponse({"message": "Invalid request method"})

@csrf_exempt
def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        try:
            patient_obj = patient.objects.get(username=username)
        except ObjectDoesNotExist:
            return JsonResponse({"message": "Invalid username"}, status=400)
        
        if check_password(password, patient_obj.password):
            return JsonResponse({"success": "Login successful"})
        else:
            return JsonResponse({"message": "Invalid password"}, status=400)

    return JsonResponse({"message": "Invalid request method"}, status=405)


@csrf_exempt
def send_email(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        gender = request.POST.get('gender')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        date = request.POST.get('date')
        time = request.POST.get('time')
        doctor = request.POST.get('doctor')
        department = request.POST.get('department')

        if appointment.objects.filter(name=name).exists():
            return JsonResponse({"message": "appointment already exists"})
        else:
            new_appointment = appointment(
                name=name,
                gender=gender,
                email=email,
                phone=phone,
                date=date,
                time=time,
                doctor=doctor,
                department=department,)
            
            new_appointment.save()
            subject = 'Test Mail'
            message = f'Hello, how can we help you?'
            email_from = 'from@yourdjangoapp.com'
            recipient = [f'{email}']
            send_mail( subject, message, email_from, recipient)
            return JsonResponse({"message": "Email sent successfully & appointment created"})

        
    else:
        return JsonResponse({"message": "Email was not sent successfully"})
    
@csrf_exempt
def send_otp(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        secret = pyotp.random_base32()
        totp = pyotp.TOTP(secret, interval=90)
        otp_generated = totp.now()
        request.session['generated_otp'] = otp_generated
        subject = 'Two Step authentication'
        message = f'Your One Time Password is {otp_generated}.'
        email_from = 'from@yourdjangoapp.com'
        recipient = [f'{email}']
        send_mail( subject, message, email_from, recipient)
        return JsonResponse({"message": "OTP sent successfully"})
    else:
        return JsonResponse({"message": "OTP was not sent successfully"})
    

def verify_otp(request):
    if request.method == 'POST':
        if 'generated_otp' in request.session:
            generated_otp = request.session['generated_otp']
            entered_otp = request.POST.get('otp')  # Change this to match how you receive the entered OTP
        
        if entered_otp and entered_otp == generated_otp:
            # OTP verification successful
            return HttpResponse("OTP verification successful")
        else:
            # OTP verification failed
            return HttpResponse("OTP verification failed")
    else:
        return HttpResponse("No OTP generated")
