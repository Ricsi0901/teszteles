const { test } = QUnit;

QUnit.module("ellenorzes()",  (h)=> {

    h.before(() => {
        this.lojatek=new LOJatek(0);
    });
    test("letezik-e", (assert)=> {
       
          assert.ok(this.lojatek.ellenorzes, "letezik");
       
    });
    test("function-e", (assert)=> {  
       
        assert.ok(typeof this.lojatek.ellenorzes=="function", "function");
     
  });
  test('minden felkapcsolva',(assert)=> {
    
    for (let index = 0; index < 9; index++) {
        lampak[index].allapot=true;
         
     }
    assert.equal(this.lojatek.ellenorzes(),"9");
  });
  test('minden lekapcsolva', (assert)=> {
    for (let index = 0; index < 9; index++) {
        lampak[index].allapot=false;
         
     }
    assert.equal(this.lojatek.ellenorzes(),"0");
  });
  test('5 lampa felkapcsolva', (assert)=> {
    for (let index = 0; index < 5; index++) {
        lampak[index].allapot=true;
         
     }
    assert.equal(this.lojatek.ellenorzes(),"5");
  });
});
QUnit.module("szomszedValtoztatasa()",  (h) => {

    h.beforeEach(() => {
        this.lojatek=new LOJatek(0);
    });
    test("letezik-e", (assert) =>{
       
          assert.ok(this.lojatek.szomszedokValtoztatasa, "letezik");
       
    });
    test("function-e",  (assert)=> {  
         
        assert.ok(typeof this.lojatek.szomszedokValtoztatasa=="function", "function");
     
  });
  test('Középső lámpát kapcsoljuk', (assert)=> {
    this.lojatek.szomszedokValtoztatasa(4)
    for (let index = 1; index < 8; index++) {
        
        assert.equal(lampak[index].allapot,true);
        index++;
    }
    
  });
  test('Bal felső sorban lévő lámpát kapcsoljuk', (assert)=> {
    this.lojatek.szomszedokValtoztatasa(0)
   
        
        assert.equal(lampak[1].allapot,true);
        assert.equal(lampak[3].allapot,true);
   
    
  });
  test('jobb felső sorban lévő lámpát kapcsoljuk', (assert)=> {
    this.lojatek.szomszedokValtoztatasa(2)
   
        
        assert.equal(lampak[1].allapot,true);
        assert.equal(lampak[5].allapot,true);
   
    
  });
  test('Bal also sorban lévő lámpát kapcsoljuk', (assert)=> {
    this.lojatek.szomszedokValtoztatasa(6)
   
        
        assert.equal(lampak[7].allapot,true);
        assert.equal(lampak[3].allapot,true);
   
    
  });
  test('jobb also sorban lévő lámpát kapcsoljuk', (assert)=> {
    this.lojatek.szomszedokValtoztatasa(8)
   
        
        assert.equal(lampak[7].allapot,true);
        assert.equal(lampak[5].allapot,true);
   
    
  });
  test('Jobb szélső középsőlévő lámpát kapcsoljuk', (assert)=> {
    this.lojatek.szomszedokValtoztatasa(5)
   index=2
        while(index<8){
            assert.equal(lampak[index].allapot,true);
            index+=index;
        }
        
       
   
    
  });
  test('bal szélső középsőlévő lámpát kapcsoljuk', (assert)=> {
    this.lojatek.szomszedokValtoztatasa(3)
  
        
            assert.equal(lampak[0].allapot,true);
            assert.equal(lampak[4].allapot,true);
            assert.equal(lampak[6].allapot,true);
           
       
     
        
       
   
    
  });
  test('Első sor  középsőlévő lámpát kapcsoljuk', (assert)=> {
    this.lojatek.szomszedokValtoztatasa(1)
  
    assert.equal(lampak[0].allapot,true);
        assert.equal(lampak[2].allapot,true);
        assert.equal(lampak[4].allapot,true);
      
        
       
   
    
  });
  test('Utolsó sor  középsőlévő lámpát kapcsoljukk', (assert)=> {
    this.lojatek.szomszedokValtoztatasa(7)
  
        assert.equal(lampak[4].allapot,true);
        assert.equal(lampak[6].allapot,true);
        assert.equal(lampak[8].allapot,true);
      
     
        
       
   
    
  });
});

QUnit.module("grafikus Teszt", function (h) {
   
   
  test("aLétrejön-e a megfelelő számú elem? ", function (assert) {
    assert.equal(lampak.length,"9");
      
    });
   

        test("aLétrejön-e a megfelelő számú elem? ", function (assert) {
            for (let i = 0; i < lampak.length; i++) {
                assert.equal(lampak[i].dataId===i,true);
                
            }
          
              
            });
            test("Megfelelő-lesz-e az elem háttérszíne?  ", function (assert) {
                for (let i = 0; i < lampak.length; i++) {
                    if(lampak[i].allapot===true){
                    assert.ok(lampak[i].elem.css("background-color","green"),true);
                }else{
                    assert.ok(lampak[i].elem.css("background-color","orange"),true);
                }
                }
              
                  
                });
            test("Kattintásra megváltozik-e az adott elem színe?", function (assert) {
                for (let index = 0; index < 9; index++) {
                    lampak[index].click();
                    let szin = lampak[index].css("background-color")
                    assert.equal(szin, 'rgb(0,128,0)');
                    
                }
               
                

            });
});