set -o errexit

poetry install 

python prod-manage.py collectstatic --no-input

python prod-manage.py migrate