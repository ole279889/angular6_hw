import { Injectable } from '@angular/core';


export class TranslationSet {
   public languange: string;
   public values: {[key: string]: string} = {};
}

@Injectable()
export class TranslationService {

    public languages = ['ru', 'eng'];

    public language = 'ru';

    private dictionary: {[key: string]: TranslationSet} = {
        'ru' : {
            languange: 'ru',
            values: {
                'пример'                : 'Пример',
				'Удалить'               : 'Удалить',
				'Изменить'              : 'Изменить',
				'Добавить'              : 'Добавить',		
                'Сохранить'				: 'Сохранить',
				'Просмотр'              : 'Просмотр',
				
				'Фамилия'               : 'Фамилия',
				'Имя'                   : 'Имя',
				'Отчество'              : 'Отчество',
				'Фамилия:'              : 'Фамилия:',
				'Имя:'                  : 'Имя:',
				'Отчество:'             : 'Отчество:',
				
				'Карточка пользователя' : 'Карточка пользователя',
				'Список пользователей'  : 'Список пользователей',
				'Добавить пользователя' : 'Добавить пользователя',
            }
        },
        'eng' : {
            languange: 'eng',
            values: {
                'пример'                : 'Example',
				'Удалить'               : 'Delete',
				'Изменить'              : 'Edit',
				'Добавить'              : 'Add',		
                'Сохранить'				: 'Save',	
                'Просмотр'              : 'View',				
				
				'Фамилия'               : 'Family',
				'Имя'                   : 'Name',
				'Отчество'              : 'Surname',
				'Фамилия:'              : 'Family:',
				'Имя:'                  : 'Name:',
				'Отчество:'             : 'Surname:',
				
				'Карточка пользователя' : 'User card',
				'Список пользователей'  : 'Users list',
				'Добавить пользователя' : 'Add user',
            }
        }
    };

    constructor() { }

    translate(value: string): string {        
        if ( this.dictionary[this.language] != null) {
            return this.dictionary[this.language].values[value];
        }
    }
}