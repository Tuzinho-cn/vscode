#include <stdio.h>
#include <stdlib.h>

struct node 
{
   struct node *ant;
   int data;
   struct node *prox;
};

struct node *ini = NULL;
struct node *fim = NULL;

void insertNode(int val)
{
   struct node *temp;         
   temp = (struct node*) malloc(sizeof(struct node));
   
   temp->data = val;
   temp->prox = NULL;

   if(ini==NULL)
   {
      temp->ant = NULL;
      ini = temp;
      fim = temp;
   }
   else
   {
      temp->ant = fim;
      fim->prox = temp;
      fim = temp; 
   }
}

int main()
{
   int val=5;
   insertNode(val);


   return 0;
}