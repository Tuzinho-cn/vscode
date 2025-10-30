#include <stdio.h>

int main()
{
   int moedas[5], uni[5];
   float troco;

   uni[50, 25, 10, 5, 1];

   printf("Digite o valor do troco: \n");
   scanf("%f", &troco);

   //AQUI VOU FAZER AS OPERAÇÕES:

   for (int i = 0 ; i < 5 ; i++)
   {
      moedas[i] = troco / 0.50;
      troco = troco - (0.50 * moedas[i]);
   }

   printf("%d", moedas[0]);

   //----------------------------

  

}