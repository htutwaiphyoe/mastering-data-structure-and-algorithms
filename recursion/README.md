# Recursion

## What is recursion?

Recursion ဆိုတာက same operation ကို different inputs တွေပေးပြီး အကြိမ်ပေါင်းများစွာလုပ်ဆောင်တဲ့ process ပဲဖြစ်ပါတယ်။ လုပ်ဆောင်ရတဲ့ အကြိမ်တိုင်းမှာလည်း problem ကို သေးလာအောင်ပြုလုပ်ပေးပါတယ်။ recursion ကို ရပ်ဖို့ base case ကို အမြဲသတ်မှတ်ပေးရပါတယ်။ မပေးရင် infinite loop ဖြစ်သွားမှာပါ။

ဥပမာအနေနဲ့ မွေးနေ့လက်ဆောင်ပုံးလေးကို ကြည့်ကြည့်ရင် လက်ဆောင်ပုံးကို ဖွင့်တိုင်း နောက်ထပ်အလားတူ လက်ဆောင်ပုံးထွက်လာသလိုမျိုးပါ။ လက်ဆောင်ကိုတွေ့ရင် process ရပ်သွားတာပေါ့။

## Why we should learn recursion

problem ကို similar sub problem အဖြစ်လုပ်လို့ရတဲ့အချိန်မျိုးမှာ recursion သည် iteration ထပ်ပိုပြီး code ကို easy to write and read ဖြစ်စေပါတယ်။

trees, graph, quick sort, merge sort တို့လို data structure နဲ့ algorithm တွေမှာ တော်တော်လေးသုံးရပါတယ်။

## Format of recursion

-   recursive case: function ကို ထပ်ခေါ်တဲ့ နေရာ
-   base case: function ကိုထပ်မခေါ်တဲ့နေရာ၊ recursion process ကိုရပ်တဲ့နေရာ

## Pseudo code

    func (para)
        if (base case)
            return base case value
        else
            func (new para)

## Example problems

-   Factorial
-   Fibonacci

## Recursion vs Iteration

|                 | recursion | iteration |
| :-------------- | :-------: | --------: |
| space efficient |    no     |       yes |
| time efficient  |    no     |       yes |
| ease of coding  |    yes    |        no |

## When to use recursion

-   problem ကို similar sub problem အဖြစ် ခွဲလိုက်လို့ရရင်
-   recursion ကယူတဲ့ time နဲ့ space ကို ပေးနိုင်ရင်
-   ကောင်းဖို့ထက် မြန်တဲ့ solution ကိုလိုချင်ရင်
