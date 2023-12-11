docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test22-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t test22-java/app ../../..
