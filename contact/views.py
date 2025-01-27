

from django.shortcuts import render

def contact_form(request):
    return render(request, 'contact/form_page.html')  