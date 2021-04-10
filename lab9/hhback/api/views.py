from django.shortcuts import render
from django.http.response import JsonResponse

from .models import Company, Vacancy


def company_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)


def company_vacancy_list(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Exception as e:
        return JsonResponse({'message': str(e)}, status=400)
    vacancies = company.vacancies.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Exception as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(company.to_json())


def vacancy_top_10(request):
    vacancies = Vacancy.objects.all().order_by('-salary')
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    if len(vacancies_json) > 10:
        vacancies_json = vacancies_json[:10]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Exception as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(vacancy.to_json())
