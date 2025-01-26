from django.shortcuts import render


def bad_request(request):
    return render(request, "404.html", status=404)


def server_error(request):
    return render(request, "500.html", status=500)
