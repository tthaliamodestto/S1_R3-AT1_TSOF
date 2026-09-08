import { describe, expect, it, vi } from "vitest";

import axios from "axios";

import { buscarCotacao, converterMoeda } from "../src/moeda";

vi.mock('axios', () => ({

default:{
    get: vi.fn(),
}

}));

describe("Biblioteca de Moedas", () => {

    //1 
    it("deve buscar a cotação do dólar corretamente", async () => {

        axios.get.mockResolvedValueOnce({
            data: {
                rates:{BRL: 5.36}
            }
        });
        
            const cotacao = await buscarCotacao("USD", "BRL");

            expect(cotacao).toBe(5.36);

            expect(axios.get).toHaveBeenCalledWith('https://api.frankfurter.app/latest' , {
                params: { 
                from: 'USD', 
                to: 'BRL'
                 },
         
            }
        );
    });


    //2

    it("deve buscar a cotação do euro corretamente", async () => {

        axios.get.mockResolvedValueOnce({
            data: {
                rates:{BRL: 5.96}
            }
        });
        
            const cotacao = await buscarCotacao("EUR", "BRL");

            expect(cotacao).toBe(5.96);

            expect(axios.get).toHaveBeenCalledWith('https://api.frankfurter.app/latest' , {
                params: { 
                from: 'EUR', 
                to: 'BRL'
                 },
         
            }
        );
    });


    //3
    it("deve buscar a cotação do CAD corretamente", async () => {

        axios.get.mockResolvedValueOnce({
            data: {
                rates:{BRL: 1.6033}
            }
        });
        
            const cotacao = await buscarCotacao("CAD", "BRL");

            expect(cotacao).toBe(1.6033);

            expect(axios.get).toHaveBeenCalledWith('https://api.frankfurter.app/latest' , {
                params: { 
                from: 'CAD', 
                to: 'BRL'
                 },
         
            }
        );
    });

    //4
    it("deve buscar a cotação do CHF corretamente", async () => {

        axios.get.mockResolvedValueOnce({
            data: {
                rates:{BRL: 0.9425}
            }
        });
        
            const cotacao = await buscarCotacao("CHF", "BRL");

            expect(cotacao).toBe(0.9425);

            expect(axios.get).toHaveBeenCalledWith('https://api.frankfurter.app/latest' , {
                params: { 
                from: 'CHF', 
                to: 'BRL'
                 },
         
            }
        );
    });

     //5
    it("deve buscar a cotação do CNY corretamente", async () => {

        axios.get.mockResolvedValueOnce({
            data: {
                rates:{BRL: 7.7936}
            }
        });
        
            const cotacao = await buscarCotacao("CNY", "BRL");

            expect(cotacao).toBe(7.7936);

            expect(axios.get).toHaveBeenCalledWith('https://api.frankfurter.app/latest' , {
                params: { 
                from: 'CNY', 
                to: 'BRL'
                 },
         
            }
        );
    });

        
    
    //6
    it("deve buscar a cotação do CZK corretamente", async () => {

        axios.get.mockResolvedValueOnce({
            data: {
                rates:{BRL: 24.186}
            }
        });
        
            const cotacao = await buscarCotacao("CZK", "BRL");

            expect(cotacao).toBe(24.186);

            expect(axios.get).toHaveBeenCalledWith('https://api.frankfurter.app/latest' , {
                params: { 
                from: 'CZK', 
                to: 'BRL'
                 },
         
            }
        );
    });



//7
    it("deve buscar a cotação do DKK corretamente", async () => {

        axios.get.mockResolvedValueOnce({
            data: {
                rates:{BRL: 7.4748 }
            }
        });
        
            const cotacao = await buscarCotacao("DKK", "BRL");

            expect(cotacao).toBe(7.4748);

            expect(axios.get).toHaveBeenCalledWith('https://api.frankfurter.app/latest' , {
                params: { 
                from: 'DKK', 
                to: 'BRL'
                 },
         
            }
        );
    });


    
//8
    it("deve buscar a cotação do HKD corretamente", async () => {

        axios.get.mockResolvedValueOnce({
            data: {
                rates:{BRL: 9.1068 }
            }
        });
        
            const cotacao = await buscarCotacao("HKD", "BRL");

            expect(cotacao).toBe(9.1068);

            expect(axios.get).toHaveBeenCalledWith('https://api.frankfurter.app/latest' , {
                params: { 
                from: 'HKD', 
                to: 'BRL'
                 },
         
            }
        );
    });

    //9
    it("deve buscar a cotação do HUF corretamente", async () => {

        axios.get.mockResolvedValueOnce({
            data: {
                rates:{BRL: 363.95 }
            }
        });
        
            const cotacao = await buscarCotacao("HUF", "BRL");

            expect(cotacao).toBe(363.95);

            expect(axios.get).toHaveBeenCalledWith('https://api.frankfurter.app/latest' , {
                params: { 
                from: 'HUF', 
                to: 'BRL'
                 },
         
            }
        );
    });



      //10 - erro
    it.only("deve buscar a cotação do NNN corretamente", async () => {

        axios.get.mockResolvedValueOnce({
            data: {
                message: "not found"
            }
        });

        await expect(buscarCotacao("NNN", "BRL")).rejects.toThrow(
            'Moeda destino não encontrada na resposta da API.'
        );
    });

    

it("deve converter o valor corretamente utilizando a cotação", async () => {
    axios.get.mockResolvedValueOnce({
        data: {
            rates: { BRL: 5.00 }
        }
    });

    const valorConvertido = await converterMoeda("USD", "BRL", 100);

    expect(valorConvertido).toBe(500); // 100 * 5.00
    expect(axios.get).toHaveBeenCalledWith('https://api.frankfurter.app/latest', {
        params: { from: 'USD', to: 'BRL' }
    });
});

it("deve lançar erro ao tentar converter valor zero ou negativo", async () => {
    await expect(converterMoeda("USD", "BRL", 0)).rejects.toThrow(
        "O valor para conversão deve ser maior que zero."
    );

    await expect(converterMoeda("USD", "BRL", -50)).rejects.toThrow(
        "O valor para conversão deve ser maior que zero."
    );
});


it("deve lançar erro quando a resposta da API não contiver o objeto 'rates'", async () => {
    axios.get.mockResolvedValueOnce({
        data: {}
    });

    await expect(buscarCotacao("USD", "XYZ")).rejects.toThrow(
        "Moeda destino não encontrada na resposta da API."
    );
});

it("deve capturar e repassar falhas de rede da requisição HTTP", async () => {
    axios.get.mockRejectedValueOnce(new Error("Network Error"));

    await expect(buscarCotacao("USD", "BRL")).rejects.toThrow("Network Error");
});

});

