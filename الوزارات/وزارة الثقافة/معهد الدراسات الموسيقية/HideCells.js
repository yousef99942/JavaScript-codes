{
    Arabic_Only(Field_ID){
        const input = document.getElementById(Field_ID);
        input.addEventListener('keydown', (e) => {
            const ctrl = e.ctrlKey || e.metaKey;
            if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

            // الأحرف العربية + الهمزة + المسافة
            if (!/^[\u0600-\u06FF\s]$/.test(e.key)) {
            e.preventDefault(); // منع أي شيء غير عربي
            }
        });
    },

    //الاسم الرباعي واللقب
    First_Field(){
        this.Arabic_Only("69026");
    },

    Second_Field(){
        this.Arabic_Only("69027");
    },

    Third_Field(){
        this.Arabic_Only("69028");
    },

    Fourth_Name(){
        this.Arabic_Only("69029");
    },

    Surname_Filed(){
        this.Arabic_Only("69030");
    },

    //اسم الام الثلاثي والتحصيل الدراسي
    Mother_First_Name(){
        this.Arabic_Only("69031");
    },
    
    Mother_Second_Name(){
        this.Arabic_Only("69032");
    },
    
    Mother_Third_Name(){
        this.Arabic_Only("69033");
    },

    //جهة اصدار البطاقة الوطنية
    ID_Place_Field(){
        this.Arabic_Only("69047");
    },

    //اسم المدرسة المتخرج منها
    School_Name_Field(){
        this.Arabic_Only("69051");
    }
}