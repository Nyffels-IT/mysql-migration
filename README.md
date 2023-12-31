# Mysql Migration Tool By Nyffels BV

A simple tool that helps you with mysql migrations by creating smart dump files and smart restore functions. This can be used to migrate new or exisiting mysql databases without loss of data due to the smart sql script generator. Originaly this is used to git version a dev database and auto deploy it to a production environment.

## Usage

Use the migration tool with the npx framework.
The current program is in Pre-Alpha version and doesn't had a valid release version yet and isn't available yet over npmjs.com. You have to compile, install and run it yourself untill alpha release.

### Smart dump

Create a smart dump of your database, wich can be used to migrate to- or upgrade another database.

#### Usage

```bash
npx @nyffels/mysq-migration --action=dump --host=database.example.com --database=my-secret-database --user=nyffelsbv --password=SuperSecretPassword!
```

#### Parameters

##### action

flag: --action
required: yes
options: 'dump' | 'restore'
description: What action do you want to use?
example:

```bash
--action=dump
```

##### database host

flag: --host
required: yes
description: Enter the host of your database schema.
example:

```bash
--host=database.example.com
```

##### database port

flag: --port
required: no
default: 3306
description: Enter the port of your database.
example:

```bash
--port=3306
```

##### database name

flag: --database
required: yes
description: Enter the name of the database.
example:

```bash
--database=my-secret-database
```

##### database user

flag: --user
required: yes
description: Enter the user of your database.
example:

```bash
--user=nyffelsbv
```

##### database password

flag: --password
required: yes
description: Enter the password of the user who has access your database.
example:

```bash
--password=SuperSecretPassword!
```

### Smart restore

Restore a smart dump file to a new or existing database.
flag --action=restore has to be used for this mode to be selected

#### Usage

```bash
npx @nyffels/mysq-migration --action=restore --host=database.example.com --database=my-secret-database --user=nyffelsbv --password=SuperSecretPassword! --dry
```

#### Parameters

##### action

flag: --action
required: yes
options: 'dump' | 'restore'
description: What action do you want to use?
example:

```bash
--action=dump
```

##### database host

flag: --host
required: yes
description: Enter the host of your database schema.
example:

```bash
--host=database.example.com
```

##### database port

flag: --port
required: no
default: 3306
description: Enter the port of your database.
example:

```bash
--port=3306
```

##### database name

flag: --database
required: yes
description: Enter the name of the database.
example:

```bash
--database=my-secret-database
```

##### database user

flag: --user
required: yes
description: Enter the user of your database.
example:

```bash
--user=nyffelsbv
```

##### database password

flag: --password
required: yes
description: Enter the password of the user who has access your database.
example:

```bash
--password=SuperSecretPassword!
```

##### Dryrun

flag: --dry
required: no
description: If this flag is included, the script will return a sql script instead of directly pushing to the database
example:

```bash
---dry
```

## Contributing

Pull requests are welcome.\
For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Release Notes

See the CHANGELOG file
