# Generated by Django 4.2.1 on 2023-08-14 04:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('medapp', '0003_alter_patient_phone'),
    ]

    operations = [
        migrations.RenameField(
            model_name='patient',
            old_name='usernname',
            new_name='username',
        ),
    ]
