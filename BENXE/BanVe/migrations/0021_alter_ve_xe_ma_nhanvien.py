# Generated by Django 4.2.11 on 2024-05-26 09:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('BanVe', '0020_remove_chi_tiet_ve_xe_ghengoi_remove_ve_xe_ten_ve_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ve_xe',
            name='Ma_NhanVien',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='BanVe.nhanvien'),
        ),
    ]