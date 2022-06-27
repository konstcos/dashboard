#!/usr/bin/python3
import os
import shutil

# папка с проектом vue
vue_root_dir = 'resources/assets/vue_frontent'
# временная папка собранных файлов
vue_build_temp_dir = 'public/vue_temp'
# папка назначения (куда нужно скопировать файлы)
target_dir = 'public'

# команда сборки проекта vue
vue_build_command = 'yarn build'

# определяем текущую дирректорию
current_dir = os.getcwd()

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

print(f'{bcolors.OKGREEN}Start building {bcolors.ENDC}\n')

# запускаем сборку проекта в папке проекта vue
os.chdir(vue_root_dir)
os.system(vue_build_command)

os.chdir(current_dir)

# проверяем собранную папку на существование
if not os.path.isdir(os.path.join(current_dir, vue_build_temp_dir)):
    print(f'\n{bcolors.FAIL}error while build project {bcolors.ENDC}\n')
    exit()

# переносим файлы из временной папки сборки в корень public
items_to_copy = os.listdir(vue_build_temp_dir)
for item in items_to_copy:
    target_type = 'file'
    if os.path.isdir(os.path.join(vue_build_temp_dir, item)):
        target_type = 'directory'
        if os.path.isdir(os.path.join(target_dir, item)):
            shutil.rmtree(os.path.join(target_dir, item))
        shutil.copytree(os.path.join(vue_build_temp_dir, item), os.path.join(target_dir, item))
    else:
        if os.path.isfile(os.path.join(target_dir, item)):
            os.remove(os.path.join(target_dir, item))
        shutil.copy2(os.path.join(vue_build_temp_dir, item), os.path.join(target_dir, item))

    print(f'{bcolors.OKBLUE}{target_type}: {item} copied success {bcolors.ENDC}')

# удаляем временную папку
shutil.rmtree(vue_build_temp_dir)

print(f'\n{bcolors.OKGREEN}End building {bcolors.ENDC}\n')
