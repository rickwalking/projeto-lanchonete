#!/bin/sh
set -e

# Verificando se migrations já rodaram
if [[ $(npx prisma migrate status) == *"Database schema is up to date"* ]]; then
  echo "Schema já está atualizado"
else
  echo "Schema não está atualizado"
  # Migrations não foram executadas, executando
  npx prisma migrate dev

  # rodar seed to banco de dados
  npx prisma db seed
fi

su node -c "npm run start:dev"
