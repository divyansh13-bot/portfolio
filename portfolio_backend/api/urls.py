from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, ContactViewSet

router = DefaultRouter()
router.register('projects', ProjectViewSet)
router.register('contact', ContactViewSet)

urlpatterns = router.urls