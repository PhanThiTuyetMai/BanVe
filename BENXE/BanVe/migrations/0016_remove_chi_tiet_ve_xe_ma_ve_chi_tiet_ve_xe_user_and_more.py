# Generated by Django 4.2.11 on 2024-05-24 17:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('BanVe', '0015_chuyenxe_ma_xe'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chi_tiet_ve_xe',
            name='Ma_Ve',
        ),
        migrations.AddField(
            model_name='chi_tiet_ve_xe',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='chi_tiet_ve_xe',
            name='vexe',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='BanVe.ve_xe'),
        ),
    ]
