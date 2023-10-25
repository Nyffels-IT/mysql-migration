# Mysql Migration Tool By Nyffels BV

A simple tool that helps you with mysql migrations by creating smart dump files and smart restore functions. This can be used to migrate new or exisiting mysql databases without loss of data due to the smart sql script generator. Originaly this is used to git version a dev database and auto deploy it to a production environment.

## Usage 

Use the migration tool with the npx framework. 
The current program is in Pre-Alpha version and doesn't had a valid release version yet and isn't available yet over npmjs.com. You have to compile, install and run it yourself untill alpha release. 

### Smart dump

To create a smart dump of your current database: 

```bash
npx @nyffels/mysq-migration --action=dump
```

### Smart restore

To create a smart restore from a smart dump file to your new or production database

```bash
npx @nyffels/mysql-migration --action=restore
```

## Contributing

Pull requests are welcome.\
For major changes, please open an issue first to discuss what you would like to change. 

Please make sure to update tests as appropriate. 

## License 

[MIT](https://choosealicense.com/licenses/mit/)

## Release Notes

See the CHANGELOG file