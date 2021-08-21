str = input("Enter the string : ")

count = {}
for ch in str :
    if ch in count:
        count[ch]+= 1
    else:
        count[ch] = 1

print("Occurence of each character of the string are")
for item in count :
    print(item," - ",count[item])