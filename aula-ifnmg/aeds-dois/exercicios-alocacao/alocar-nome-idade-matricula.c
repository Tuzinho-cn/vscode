#include <stdio.h>

int main()
{
   int moedas[5], uni[5];
   float troco;

   uni[50, 25, 10, 5, 1];

   printf("Digite o valor do troco: \n");
   scanf("%f", &troco);

   troco = troco * 100;

   //AQUI VOU FAZER AS OPERAÇÕES:

   for (int i = 0 ; i < 5 ; i++)
   {
      moedas[i] = troco / uni[i];
      troco = troco - (uni[i] * moedas[i]);
   }

   //----------------------------

   for (int i = 0 ; i > 5 ; i++)
   {
      printf("Moedas de %d: %d;\n", uni[i], moedas[i]);
   }

}