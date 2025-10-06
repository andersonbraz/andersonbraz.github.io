# SQL

## Comandos SQL

| DQL              | DDL      | DCL    | DML    |
|------------------|----------|--------|--------|
| ORDER BY         | CREATE   | GRANT  | SELECT |
| SELECT           | VIEW     | REVOKE | INSERT |
| GROUP BY         | ALTER    |        | UPDATE |
| WHERE            | DROP     |        | DELETE |
| ALIAS            | TRUNCATE |        |        |
| JOIN             |          |        |        |
| FUNCTIONS        |          |        |        |
| WINDOW FUNCTIONS |          |        |        |


## Ordem de escrita SQL

- SELECT
- FROM
- WHERE
- GROUP BY
- HAVING
- ORDER BY

## Ordem de execução SQL

- FROM
- WHERE
- GROUP BY
- HAVING
- SELECT
- ORDER BY

## ALIAS

```sql
SELECT nome AS 'first_name', sobrenome AS 'last_name' 
FROM TB_USUARIOS AS 'USERS';
```

## GROUP BY

```sql
SELECT nome, sobrenome, cidade
FROM TB_USUARIOS
GROUP BY cidade;
```

## ORDER BY

```sql
SELECT nome, sobrenome, cidade
FROM TB_USUARIOS
ORDER BY nome;
```

## JOIN

```sql
```

## FUNCTIONS

```sql
```

## WHERE

```sql
```

## Referências e Fontes