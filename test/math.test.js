import { describe, it, expect } from 'vitest'; 

import {
    somar,
    subtrair,
    multiplicar,
    dividir,
    elevar,
    fatorial,
    ehPar,
    media,
    ehPrimo,
    limitar,
    fibonacci                                   
} from '../src/math.js';

describe('Biblioteca Matemática', () => {

    describe('somar', () => {
        it('deve somar dois números corretamente', () => {
            expect(somar(2, 3)).toBe(5);
            expect(somar(2, 0)).toBe(2);
            expect(somar(-2, 5)).toBe(3);
            expect(somar(1, 0)).toBe(1);
            expect(somar(-5, 5)).toBe(0);
            expect(somar(54, 67)).toBe(121);
            expect(somar(95, 5)).toBe(100);

            // ERRO: 
            //expect(somar(2, 3)).toBe(999);
        });

        it('deve lançar um erro ao somar com valores não numéricos', () => {
            expect(() => somar(2, '3')).toThrow('Os valores devem ser números.');    
        });
    });



    describe('subtrair', () => {
        it('deve subtrair dois números corretamente', () => {
            expect(subtrair(5, 2)).toBe(3);
            expect(subtrair(2, 5)).toBe(-3);
            expect(subtrair(0, 0)).toBe(0);
            expect(subtrair(23, 34)).toBe(-11);
            expect(subtrair(33, 5)).toBe(28);
            expect(subtrair(20, 3)).toBe(17);
            expect(subtrair(45, 7)).toBe(38);
       
       
            // ERRO: 
            //expect(subtrair(5, 2)).toBe(0);

        });
    });

    describe('multiplicar', () => {
        it('deve multiplicar dois números corretamente', () => {
            expect(multiplicar(3, 4)).toBe(12);
            expect(multiplicar(5, 0)).toBe(0);
            expect(multiplicar(32, 3)).toBe(96);
            expect(multiplicar(-2, -3)).toBe(6);
            expect(multiplicar(-5, -3)).toBe(15);
            expect(multiplicar(-4, -4)).toBe(16);
            expect(multiplicar(5, 4)).toBe(20);
            expect(multiplicar(34, 7)).toBe(238);

            // ERRO: 
            //expect(multiplicar(3, 4)).toBe(-12);
        });
    });

    describe('dividir', () => {
        it('deve dividir dois números corretamente', () => {
            expect(dividir(10, 2)).toBe(5);
            expect(dividir(5, 2)).toBe(2.5);
            expect(dividir(-6, 2)).toBe(-3);
            expect(dividir(6, 3)).toBe(2);
            expect(dividir(20, 2)).toBe(10);
            expect(dividir(134, 2)).toBe(67);
            expect(dividir(230, 4)).toBe(57.5);

            // ERRO: 
            //expect(dividir(10, 0)).toBe(20);
        });

        it('deve lançar erro ao tentar dividir por zero', () => {
            expect(() => dividir(10, 0)).toThrow();
        });
    });

    describe('elevar (potenciação)', () => {
        it('deve elevar a base ao expoente corretamente', () => {
            expect(elevar(2, 3)).toBe(8);
            expect(elevar(5, 0)).toBe(1);
            expect(elevar(2, -1)).toBe(0.5);
            expect(elevar(2, 2)).toBe(4);
            expect(elevar(2, 10)).toBe(1024);
            expect(elevar(5, 2)).toBe(25);
            expect(elevar(9, 3)).toBe(729);

            // ERRO: 
           // expect(elevar(2, 3)).toBe(6);
        });
    });

    describe('fatorial', () => {
        it('deve calcular o fatorial de números inteiros positivos e zero', () => {
            expect(fatorial(0)).toBe(1);
            expect(fatorial(1)).toBe(1);
            expect(fatorial(5)).toBe(120);
            expect(fatorial(2)).toBe(2);
            expect(fatorial(10)).toBe(3628800);
            expect(fatorial(6)).toBe(720);
            expect(fatorial(7)).toBe(5040);


            // ERRO: 
            //expect(fatorial(0)).toBe(0);
        });

        it('deve lançar erro ao tentar calcular fatorial de número negativo', () => {
            expect(() => fatorial(-1)).toThrow();
        });
    });

    describe('ehPar', () => {
        it('deve retornar true para números pares e false para ímpares', () => {
            expect(ehPar(4)).toBeTruthy(true);
            expect(ehPar(0)).toBeTruthy(true);
            expect(ehPar(7)).toBeFalsy(false);
            expect(ehPar(-2)).toBeTruthy(true);
            expect(ehPar(5)).toBeFalsy(false);
            expect(ehPar(-1)).toBeFalsy(false);
            expect(ehPar(-5)).toBeFalsy(false);

            // ERRO: 
            //expect(ehPar(4)).toBe(false);
        });
    });

    describe('media', () => {
        it('deve calcular a média de uma lista de números', () => {
            expect(media([10, 20, 30])).toBe(20);
            expect(media([5, 5, 5, 5])).toBe(5);
            expect(media([0, 10])).toBe(5);

            expect(media([0, 20])).toBe(10);
            expect(media([0, 40])).toBe(20);

            

            // ERRO: 
            //expect(media([10, 20, 30])).toBe(10);
        });
        });

        it('deve tratar ou lançar erro para arrays vazios', () => {
            expect(() => media([])).toThrow();
        });
    });

    describe('ehPrimo', () => {
        it('deve identificar corretamente números primos e não primos', () => {
            expect(ehPrimo(2)).toBe(true);
            expect(ehPrimo(7)).toBe(true);
            expect(ehPrimo(13)).toBe(true);
            expect(ehPrimo(3)).toBe(true);
            expect(ehPrimo(1)).toBe(false);
            expect(ehPrimo(4)).toBe(false);
            expect(ehPrimo(0)).toBe(false);
            expect(ehPrimo(-5)).toBe(false);
            expect(ehPrimo(4)).toBe(false);
            expect(ehPrimo(5)).toBe(true);
            expect(ehPrimo(20)).toBe(false);

            // ERRO: 
            //expect(ehPrimo(4)).toBe(true);
        
        });
    });

    describe('limitar', () => {
        it('deve restringir o valor entre o mínimo e o máximo estipulados', () => {
            expect(limitar(5, 0, 10)).toBe(5);  
            expect(limitar(-5, 0, 10)).toBe(0);  
            expect(limitar(15, 0, 10)).toBe(10); 
            expect(limitar(20, 0, 30)).toBe(20); 
            expect(limitar(1, 0, 2)).toBe(1); 
            expect(limitar(40, 0, 55)).toBe(40); 
            expect(limitar(10, 0, 15)).toBe(10); 


            // ERRO: 
            //expect(limitar(15, 0, 10)).toBe(15);
        });
    });

    describe('fibonacci', () => {
        it('deve retornar o enésimo número da sequência de Fibonacci', () => {
            expect(fibonacci(0)).toBe(0);
            expect(fibonacci(1)).toBe(1);
            expect(fibonacci(6)).toBe(8);
            expect(fibonacci(8)).toBe(21);
            expect(fibonacci(5)).toBe(5);
            expect(fibonacci(10)).toBe(55);
            expect(fibonacci(20)).toBe(6765);


            

            // ERRO: 
            //expect(fibonacci(6)).toBe(13);
        });

        it('deve lançar erro se a posição for negativa', () => {
            expect(() => fibonacci(-1)).toThrow();
        });
    });



