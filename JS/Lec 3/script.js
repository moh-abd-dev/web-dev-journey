// stack vs heap

// Memory management

// when we need to run some application the code from rom comes into ram by os and cpu will run the instructions
// not directly from rom to cpu becoz its slow

// Byte addressable ram 
// variables will have their unique adresses(but where this mapping table present) (variable will be replaced by the address)

// in stack we can store values directly as well as addresses of values stored in heap

// ways to store data in memory(random vs ordered)

// why heap and not stack only

// fixed vs dynamic(sized) data allocation-string,array are dynamic sized

// whenever dynamic data are changed later then their variable address need to be changed wherever they are used,to overcome this we need stack

// fixed(static) sized data will be stored in stack ,dynamic will be stored in heap and their address will be stored in stack

// Memory allocation in Javascript
// 32(4 byte) bit ,64 bit OS

// primitive(immutable) data in stack or heap?-->heap(data) and stack(heap address of that data) and same for non primitive
// primitive like int do have fixed size but still as primitive cant be destroyed so a new address location of that variable with new
// data will needed and then same stack address and heap data

// Optimizing memory for true,false,null,undefined(these 4 have a fixed place in heap memory and any variable need the value will point to it)
// Memory allocations for objects

// Garbage COllection:Cleaning up unused memory(Garbage collector will delete the unpointed memory usage in heap)

// Memory optimization for loop-> becoz new data in a loop but where to store in heap (randomly)

// a array of one lakh size array is formed in heap and then pointing whenever needed but its not efficient -> instead directly changing value in address by formula no need to form the array
// but cant be done same with a string ->so for that we will store that data in heap whenever number not starts with 0

// Encoding data in address

// like a number is stored in 32 bit as actual number is stored in first 31 bits and last bit -> 0 indicates its a number so need to go to heap 
// by this we can encode -2^30 to 2^30-1 numbers (this is not applicable all nig number,floating points and all only till this limit)
// other than this as usual heap,but generally loop are not for that much numbers(smi vs heap numbers)

// Element address (or say element) : base address + index*sizeofdata


//HW -> 64 bit system