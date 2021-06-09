function reverse(n,arr){
    let res = arr.slice(0,n);
    res = res.reverse('');
    console.log(res.join(' '));


}
reverse(3,[1,2,3,4,5]);