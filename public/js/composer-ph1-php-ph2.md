PS D:\laragon\www\laravel-vue-dashboard> composer help
Description:
  Display help for a command

Usage:
  help [options] [--] [<command_name>]

Arguments:
  command_name                   The command name [default: "help"]

Options:
      --format=FORMAT            The output format (txt, xml, json, or md) [default: 
"txt"]
      --raw                      To output raw command help
  -h, --help                     Display help for the given command. When no command 
is given display help for the list command
  -q, --quiet                    Do not output any message
  -V, --version                  Display this application version
      --ansi|--no-ansi           Force (or disable --no-ansi) ANSI output
  -n, --no-interaction           Do not ask any interactive question
      --profile                  Display timing and memory usage information
      --no-plugins               Whether to disable plugins.
      --no-scripts               Skips the execution of all scripts defined in composer.json file.
  -d, --working-dir=WORKING-DIR  If specified, use the given directory as working directory.
      --no-cache                 Prevent use of the cache
  -v|vv|vvv, --verbose           Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
Help:
  The help command displays help for a given command:

    D:\laragon\bin\composer\composer.phar help list

  You can also output the help in other formats by using the --format option:        

    D:\laragon\bin\composer\composer.phar help --format=xml list

  To display the list of available commands, please use the list command.
PS D:\laragon\www\laravel-vue-dashboard> composer install
Installing dependencies from lock file (including require-dev)
Verifying lock file contents can be installed on current platform.
Nothing to install, update or remove
Generating optimized autoload files
> Illuminate\Foundation\ComposerScripts::postAutoloadDump
> @php artisan package:discover --ansi
Discovered Package: facade/ignition
Discovered Package: fruitcake/laravel-cors
Discovered Package: laravel/passport
Discovered Package: laravel/sail
Discovered Package: laravel/tinker
Discovered Package: laravel/ui
Discovered Package: nesbot/carbon
Discovered Package: nunomaduro/collision
Package manifest generated successfully.
79 packages you are using are looking for funding.
Use the `composer fund` command to find out more!
PS D:\laragon\www\laravel-vue-dashboard> php artisan key:generate
Application key set successfully