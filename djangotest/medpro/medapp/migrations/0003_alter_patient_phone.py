# Generated by Django 4.2.1 on 2023-08-10 17:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('medapp', '0002_alter_patient_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patient',
            name='phone',
            field=models.IntegerField(),
        ),
    ]
