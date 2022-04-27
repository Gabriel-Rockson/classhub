# Generated by Django 4.0.4 on 2022-04-27 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(help_text='Enter the first name of the teacher.', max_length=50, verbose_name='First Name')),
                ('last_name', models.CharField(help_text='Enter the last name of the teacher.', max_length=50, verbose_name='Last Name')),
                ('middle_name', models.CharField(blank=True, help_text='Enter middle name of teacher if applies.', max_length=50, null=True, verbose_name='Middle Name')),
                ('email', models.EmailField(help_text='Email address of the teacher.', max_length=255, verbose_name='Email Address')),
                ('address', models.CharField(blank=True, max_length=100, null=True, verbose_name='Address of Teacher')),
                ('cell_number', models.CharField(max_length=20, verbose_name='Cell Number')),
            ],
            options={
                'verbose_name': 'Teacher',
                'verbose_name_plural': 'Teachers',
                'ordering': ('first_name',),
            },
        ),
    ]
