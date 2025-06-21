-- Script para configuração inicial do banco de dados PostgreSQL
-- Execute este script no seu banco PostgreSQL antes de rodar as migrações

-- Criar o banco de dados (se necessário)
-- CREATE DATABASE denserola_db;

-- Verificar se a conexão está funcionando
SELECT version();

-- Este script pode ser executado para verificar se o banco está pronto
-- Após executar este script, rode:
-- 1. npx prisma db push
-- 2. npx prisma db seed
