from django.urls import path
from .views import *

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:company_id>', company_detail),
    path('companies/<int:company_id>/vacancies/', company_vacancy_list),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:vacancy_id>', vacancy_detail),
    path('vacancies/top_ten/', vacancy_top_10)
]