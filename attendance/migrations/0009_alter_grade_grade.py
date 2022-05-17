# Generated by Django 4.0 on 2022-05-17 13:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('attendance', '0008_alter_grade_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grade',
            name='grade',
            field=models.CharField(choices=[('P', 'Pre-K'), ('K', 'Kindergarten'), ('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6'), ('7', '7'), ('8', '8'), ('9', '9'), ('10', '10'), ('11', '11'), ('12', '12')], default='1', help_text='Select grade of class.', max_length=2, verbose_name='Grade'),
        ),
    ]
