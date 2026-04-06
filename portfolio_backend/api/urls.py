# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import ProjectViewSet, ContactViewSet, project_list, contact_create

# router = DefaultRouter()
# router.register('projects', ProjectViewSet)
# router.register('contact', ContactViewSet)

# urlpatterns = [
#     # custom test APIs
#     path('projects-test/', project_list),
#     path('contact-test/', contact_create),

#     # main API routes
#     path('', include(router.urls)),
# ]

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, ContactViewSet

router = DefaultRouter()
router.register('projects', ProjectViewSet)
router.register('contact', ContactViewSet)

urlpatterns = [
    path('', include(router.urls)),
]