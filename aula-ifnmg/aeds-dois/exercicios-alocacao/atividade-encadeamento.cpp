#include <stdio.h>
#include <stdlib.h>

/*Faça um programa que cadastre 5 produtos. 
Para cada produto devem ser cadastrados código do produto, preço e quantidade estocada. Os dados devem ser armazenados em uma lista simplesmente encadeada e não ordenada*/

struct node 
{
   int code;
   float price;
   int quant;

   struct node* prox;
};

node* insert(node* list, int code, float price, int quant)
{
   node* novo = (node*) malloc(sizeof(node));

   novo->code = code;
   novo->price = price;
   novo->quant = quant;
   novo->prox = list;

   return novo;
}

void show(node *list)
{
   node* p = list;

   while (p != NULL)
   {
      printf("\nCodigo: %d | Preço: %.2f | Quantidade: %d\n", p->code, p->price, p->quant);

      p = p->prox;
   }
}

int main()
{
   node* list = NULL;

   for(int i = 0; i < 5 ; i++)
   {
      int code, quant;
      float price;

      printf("\n--------------------------------");

      printf("\nCadastro do produto %d\n", i + 1);

      printf("\nCodigo: ");
      scanf("%d", &code);

      printf("Preço: ");
      scanf("%f", &price);

      printf("Quantidade: ");
      scanf("%d", &quant);

      list = insert(list, code, price, quant);

   }

   printf("\n--------------------------------");
   printf("\n----- PRODUTOS CADASTRADOS -----\n");
   show(list);
   printf("\n--------------------------------\n");
}