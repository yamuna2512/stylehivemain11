from django.shortcuts import render
from rest_framework import generics

from apps.users.mixins import CustomLoginRequiredMixin
from .serializers import OrderListSerializer, OrderSerializer
from .models import Order

class OrderList(CustomLoginRequiredMixin, generics.ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderListSerializer

    def get(self, request, *args, **Kwargs):
        self.queryset = Order.objects.order_by('-id').filter(user = request.login_user.id)
        return self.list(request, *args **Kwargs)
    
class OrderAdd(CustomLoginRequiredMixin, generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def post(self, request, *args, **Kwargs):
        request.data['user'] = request.login_user.id
        return super().create(request, *args, **Kwargs)   
        
