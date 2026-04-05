from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, ContactViewSet

urlpatterns = [
    path('projects/', views.project_list),
    path('contact/', views.contact_create),
]

router = DefaultRouter()
router.register('projects', ProjectViewSet)
router.register('contact', ContactViewSet)

urlpatterns = router.urls