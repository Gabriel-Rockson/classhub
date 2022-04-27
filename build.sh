set -o errexit

cd frontend

# Build the frontend
npm run build

# Move files at the build root inside a root subdirectory
mkdir -p build/root
for file in $(ls build | grep -E -v '^(index\.html|static|root)$'); do
    mv "build/$file" build/root;
done

cd ..

poetry install 

python manage.py collectstatic --no-input

python manage.py migrate