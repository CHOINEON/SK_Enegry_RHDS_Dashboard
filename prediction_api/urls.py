# prediction_api/urls.py

from django.urls import path
from .views import SimulationDataAPIView

urlpatterns = [
    # 4개 차트가 모두 이 엔드포인트를 사용하도록 설정
    # 예: /api/data/dsld95/, /api/data/dslflashpt/, ...
    path('data/<str:model_name>/', SimulationDataAPIView.as_view(), name='simulation-data'),
]