# Generated by Django 4.0.4 on 2022-05-11 21:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('attendance', '0004_alter_studentattendance_attendance_created_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='studentattendance',
            old_name='attendance_created',
            new_name='created',
        ),
        migrations.RenameField(
            model_name='studentattendance',
            old_name='attendance_updated',
            new_name='updated',
        ),
    ]
