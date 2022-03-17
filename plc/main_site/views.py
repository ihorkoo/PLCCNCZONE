from django.shortcuts import render


# Create your views here.
def main(request):
    return render(request, 'main.html')


def contact(request):
    if request.method == 'POST':
        try:
            print(request._post['name'])
            print(request._post['phone'])
            print(request._post['email'])
            context = {'successful': True}
        except:
            context = {'error': True}
        finally:
            return render(request, 'contact.html', context=context)
    else:
        return render(request, 'contact.html')


def about(request):
    return render(request, 'about.html', )

def product(request):
    print(request.GET.get('q'))
    return render(request, 'product.html', )
