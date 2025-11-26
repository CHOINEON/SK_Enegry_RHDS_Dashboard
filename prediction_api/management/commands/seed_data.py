# prediction_api/management/commands/seed_data.py

from django.core.management.base import BaseCommand
from prediction_api.models import DslD95, DslFlashPt, TarD5, NaphD95 
from datetime import datetime, timedelta
import random

class Command(BaseCommand):
    help = 'Seeds the database with dummy simulation result data for 4 models.'

    def handle(self, *args, **options):
        # 기존 데이터 삭제 (재실행 시 중복 방지)
        DslD95.objects.all().delete()
        DslFlashPt.objects.all().delete()
        TarD5.objects.all().delete()
        NaphD95.objects.all().delete()
        
        # 모델 클래스 및 베이스 값 정의
        MODEL_CONFIG = {
            DslD95: {'base': 365.0, 'db_table': 'result_DslD95'}, 
            DslFlashPt: {'base': 90.0, 'db_table': 'result_DSL_FlashPt'},
            TarD5: {'base': 378.0, 'db_table': 'result_TarD5'},
            NaphD95: {'base': 160.0, 'db_table': 'result_NaphD95'}
        }
        
        # 날짜 범위 설정: 2022년 12월 1일 ~ 2023년 7월 31일
        start_date = datetime(2022, 12, 1, 7, 0)
        end_date = datetime(2023, 7, 31, 7, 0)
        current_date = start_date
        
        ERROR_MIN = 1.9
        ERROR_MAX = 2.9
        
        self.stdout.write("Starting data seeding...")

        while current_date <= end_date:
            for ModelClass, config in MODEL_CONFIG.items():
                
                # 1. 실제값 (TARGET) 생성: 베이스 + 작은 랜덤 변동
                target_value = config['base'] + random.uniform(-config['base'] * 0.01, config['base'] * 0.01)
                
                # 2. 예측 오차 적용: 1.9 ~ 2.9 사이의 랜덤 오차
                error_sign = random.choice([-1, 1])
                error_value = random.uniform(ERROR_MIN, ERROR_MAX) * error_sign
                predict_value = target_value + error_value
                
                # 3. 객체 생성 및 저장
                ModelClass.objects.create(
                    date=current_date,
                    target=round(target_value, 2), # 소수점 두 자리로 제한
                    predict=round(predict_value, 2),
                )

            current_date += timedelta(days=1)

        self.stdout.write(self.style.SUCCESS(f'Successfully seeded {len(MODEL_CONFIG) * ((end_date - start_date).days + 1)} data points.'))