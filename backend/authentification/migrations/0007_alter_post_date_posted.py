# Generated by Django 4.2.7 on 2023-11-16 17:32

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentification', '0006_alter_user_date_joined'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='date_posted',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 11, 16, 17, 32, 33, 230275), null=True),
        ),
    ]
