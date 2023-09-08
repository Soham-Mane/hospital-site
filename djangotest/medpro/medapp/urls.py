from django.urls import path
from .views import PatientsViewSet,signup,login,send_email,send_otp,verify_otp

urlpatterns = [
    path('patients/', PatientsViewSet.as_view({'get': 'list', 'post': 'create'}), name='patient-list'),
    path('patients/<int:pk>/', PatientsViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), 
         name='patient-detail'),
    path('signup/', signup, name='signup'),
    path('login/', login, name='login'), 
    path('send_email/', send_email, name='send_email'), 
    path('send_otp/', send_otp, name='send_otp'), 
    path('verify_otp/', verify_otp, name='verify_otp'), 
]
