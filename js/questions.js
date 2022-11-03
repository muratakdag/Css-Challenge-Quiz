const quizQuestions = [
  {
    id: 0,
    question:
      'CSS (Cascading Style Sheet) ile aşağıdakilerden hangisi yapılamaz?',
    choices: [
      'Bir tablonun border’ının rengi kırımızı yapılması',
      'Bir yazının fontunun Arial yapılması',
      'Bir link alt çizgisinin kaldırılması',
      'Bir sayfanın yeniden yüklenmesi',
    ],
    answer: 'Bir sayfanın yeniden yüklenmesi',
  },
  {
    id: 1,
    question:
      'Bir tablo hücresinin genişliğini diğer hücrelerden daha büyük yapmak için td tag’inin hangi özelliği kullanılır?',
    choices: ['cols', 'rows', 'colspan', 'rowspan'],
    answer: 'colspan',
  },
  {
    id: 2,
    question:
      'test.css dosyalarındaki style’leri kullanmak için hangi tag kullanılmalıdır?',
    choices: ['html', 'style', 'link', 'body'],
    answer: 'link',
  },
  {
    id: 3,
    question:
      'Class selector(seçicisi) ile id selector(seçicisi) arasındaki en önemli fark aşağıdakilerden hangisidir?',
    choices: [
      'class selector’ler yanlızca inline elementler için geçerlidir. id ise block level için geçerlidir.',
      'class selector’ler yanlızca block level elementler için kullanılır. id ise inline elementler için kullanılır',
      'class’lar sadece renk ve border özellikleri için kullanılır. id her style için kullanılabilir.',
      'class selectorler istenildiği kadar kullanılabilir. id selector’ler yanlızca bir kere kullanılabilir.',
    ],
    answer:
      'class selectorler istenildiği kadar kullanılabilir. id selector’ler yanlızca bir kere kullanılabilir.',
  },
  {
    id: 4,
    question:
      'Bir sayfadaki tüm linklerin alt çizgisini kaldırmak için aşağıdaki hangi style’li kullanmamız gerekir?',
    choices: [
      'a{text-line:none}',
      'a{text-line:none}',
      'a{text-decoration:none}',
      'link{text-line:none}',
    ],
    answer: 'a{text-decoration:none}',
  },
  {
    id: 5,
    question:
      "Aşağıdaki tag(etiket) 'lerden hangisiyle yazıyı ortalayabiliriz?",
    choices: ['right', 'align', 'body', 'orta'],
    answer: 'align',
  },
  {
    id: 6,
    question:
      'CSS ile .adobewordpress classına sahip bir div’e nasıl domates rengi arka plan atayabiliriz?',
    choices: [
      'div.adobewordpress{background:tomato}',
      '.adobewordpress{background-color:tomato}',
      '.adobewordpress{background:tomato}',
      'Hepsi',
    ],
    answer: 'Hepsi',
  },
  {
    id: 7,
    question:
      'CSS ile bir metnin rengini değiştirmek istediğinizde ihtiyaç duyacağınız tanımlama aşağıdakilerden hangisidir?',
    choices: ['txt-color', 'color', 'font-color', 'text-color'],
    answer: 'color',
  },
  {
    id: 8,
    question: 'CSS’in açılımı nedir?',
    choices: [
      'Cascading Style Sheets',
      'Casual Code Shape',
      'Cascading Sheet Styling',
      'Complete Site Styling',
    ],
    answer: 'Cascading Style Sheets',
  },
  {
    id: 9,
    question: 'CSS’in padding tanımı ne işe yarar?',
    choices: [
      'Öğelerin kenalarından içine olan boşluğunu yönetir.',
      'Öğelerin kenalarından dışarıya ve diğer öğelere olan boşluğunu yönetir.',
      'Öğelerin sağa veya sola yaslanmasını sağlar.',
      'Öğeleri, içindeki tüm yapılarla beraber büyütür.',
    ],
    answer: 'Öğelerin kenalarından içine olan boşluğunu yönetir.',
  },
  {
    id: 10,
    question:
      'CSS (Cascading Style Sheet) ile aşağıdakilerden hangisi yapılamaz?',
    choices: [
      'Bir tablonun border’ının rengi kırımızı yapılması.',
      'Bir sayfanın yeniden yüklenmesi.',
      'Bir link’in üzerine gelindiğinde link’in renginin değiştirilmesi',
      'Bir link alt çizgisinin kaldırılması',
    ],
    answer: 'Bir sayfanın yeniden yüklenmesi.',
  },
  {
    id: 11,
    question:
      'Bir web sayfasında bir resmi istediğimiz yere yerleştirmek için kullanılan Css komutu hangisidir?',
    choices: [
      'background-image',
      'background-position',
      'background-attachment',
      'background-repeat',
    ],
    answer: 'background-position',
  },
  {
    id: 12,
    question:
      'Bir web sayfasında yazının büyüklüğünü ayarlamak için hangi Css komutunu kullanırız?',
    choices: ['font-size', 'font-family', 'font-weight', 'line-height'],
    answer: 'font-size',
  },
  {
    id: 13,
    question:
      'HTML sayfasına, img klasörü içindeki “resim.jpg” adlı resmi arka planda yatay olarak tekrarlayarak yerleştiren css kodu aşağıdakilerden hangisinde doğru verilmiştir?',
    choices: [
      'background-image: url(img/resim.jpg); background-repeat: repeat-x, repeat-y;',
      'background-image: url(img/resim.jpg); background-repeat: no -repeat;',
      'background-image: url(resim.jpg); background-repeat: repeat-x;',
      'background-image: url(img/resim.jpg); background-repeat: repeat-x;',
    ],
    answer:
      'background-image: url(img/resim.jpg); background-repeat: repeat-x;',
  },
  {
    id: 14,
    question:
      'Html’de onay kutusu oluşturmak için kullanılan etiket hangisidir ?',
    choices: [
      '< checkbox>',
      '< input=checkbox>',
      "< input type='checkbox'>",
      '< input checkbox>',
    ],
    answer: "< input type='checkbox'>",
  },
  {
    id: 15,
    question:
      ' Bir tabloda birden fazla hücreyi dikeyde birleştirmek için hangi parametre kullanılır?',
    choices: ['cols', 'rows', 'colspan', 'rowspan'],
    answer: 'rowspan',
  },
  {
    id: 16,
    question:
      'Aşağıdaki css kurallarından hangisi bir metnin rengini değiştirmek için kullanılır?',
    choices: ['text-color', 'font-color', 'color', 'font-style'],
    answer: 'color',
  },
  {
    id: 17,
    question:
      'Aşağıdaki css kurallarından hangisi metinleri blok elementleri içerisinde iki yana yaslı olarak gösterilmesini sağlar?',
    choices: [
      'text-align:left',
      'text-align:right',
      'text-align:justify',
      'align:justify',
    ],
    answer: 'text-align:justify',
  },
  {
    id: 18,
    question:
      'Aşağıdaki css kurallarından hangisi bir metnin rengini kırmızı yapmak için kullanılır?',
    choices: [
      'text-color:red;',
      'color:red;',
      'color:#red;',
      'text-color:#red;',
    ],
    answer: 'color:red;',
  },
  {
    id: 19,
    question:
      'Aşağıdaki css kurallarından hangisi bir blok elementinin tüm kenarlarını 1px ebatında,kesik çizgi ve kırmızı yapmak için kullanılır?',
    choices: [
      'border: 1px solid red;',
      'border:1px double blue;',
      'border:1px dashed red;',
      'border:1px dotted red;',
    ],
    answer: 'border:1px dashed red;',
  },
  {
    id: 20,
    question:
      'Aşağıdaki css kurallarından hangisi bir blok elementinin genişliğini 300px , yüksekliğini 500px yapmak için kullanılır?',
    choices: [
      'div{width:300px,height:500px;}',
      'div{width:500px,height:300px;}',
      'b{width:300px,height:500px;}',
      'span{width:400px,height:400px;}',
    ],
    answer: 'div{width:300px,height:500px;}',
  },
  {
    id: 21,
    question:
      'Zemin rengini değiştirmek için kullanılan CSS komutu hangisidir?',
    choices: ['background-color', 'bgcolor', 'color', 'bg-color'],
    answer: 'background-color',
  },
  {
    id: 22,
    question:
      ' Zemin resmininin sürekli tekrarlanmasını engelleyen komut hangisidir?',
    choices: ['repeat-x', 'repeat-y', 'no-repeat', 'Hiçbiri'],
    answer: 'no-repeat',
  },
  {
    id: 23,
    question:
      'Bir metnin altı çizgili olması istenmiyor ise hangi komut kullanılmalıdır?',
    choices: [
      'text-decoration:underline',
      'text-decoration:none',
      'text-decoration:overline',
      'text-decoration:line-through',
    ],
    answer: 'text-decoration:none',
  },
  {
    id: 24,
    question:
      'Bir yazının eğik yazılması istenirse hangi CSS komutu kullanılmalıdır?',
    choices: ['font-style', 'text-decoration', 'font-family', 'font-size'],
    answer: 'font-style',
  },
  {
    id: 25,
    question: 'Bir yazının koyu yazılması için kullanılan CSS kodu hangisidir?',
    choices: ['font-size', 'font-style', 'font-weight', 'font-family'],
    answer: 'font-weight',
  },
  {
    id: 26,
    question:
      'Bir websitesi tasarımında iki div nesnesinin yanyana konumlandırılması isteniyorsa hangisi kullanılmalıdır?',
    choices: ['padding-top:auto', 'float:left', 'margin:auto', 'width:100%'],
    answer: 'float:left',
  },
  {
    id: 27,
    question:
      'Zemin resminin yatay olarak gösterilmesi için kullanılan CSS ifadesi hangisidir?',
    choices: [
      'Background-image:norepeat',
      'Background-image:repeat-x',
      'Background-image:repeat-y',
      'Background-image:repeat',
    ],
    answer: 'Background-image:repeat-x',
  },
  {
    id: 28,
    question:
      ' Aşağıdaki css kurallarından hangisi bir metnin font büyüklüğünü bağıl olarak değiştirmek için kullanılır?',
    choices: [
      'font-size:16px;',
      'font-size:1em;',
      'font-size:1cm;',
      'font-size:10mm;',
    ],
    answer: 'font-size:1em;',
  },
  {
    id: 29,
    question:
      "Style etiketleri arasına elementleri sınıflandırarak verdiğimiz CSS kodlarındaki class'lara aşağıdaki işaretlerden hangisi ile ulaşırız ?",
    choices: ['#', '.(nokta)', '%', '+'],
    answer: '.(nokta)',
  },
  {
    id: '30',
    question:
      "CSS'de önceki satırdaki hizalama etkisinden kurtulmak ve blokları bir sonraki satıra taşımak için kullanılan kod hangisidir?",
    choices: ['align:center;', 'margin:auto;', 'clear:both;', 'float:left;'],
    answer: 'clear:both;',
  },
  {
    id: 31,
    question: "CSS'de kutucukları ortalamak için hangi kod kullanılır?",
    choices: ['margin:auto;', 'float:right;', 'align:center;', 'clear:both;'],
    answer: 'margin:auto;',
  },
  {
    id: 32,
    question:
      ' Bir web sayfasında bir resmi istediğimiz yere yerleştirmek için kullanılan Css komutu hangisidir?',
    choices: [
      'background-image',
      'background-position',
      'background-attachment',
      'background-repeat',
    ],
    answer: 'background-position',
  },
  {
    id: 33,
    question:
      'css de kod sıralaması yaparken 4lü kullanımda bu sıralama hangi yönde gerçekleşir?',
    choices: [
      'alt sol üst sağ',
      'sol sağ üst alt',
      'üst sağ alt sol',
      'üst sol alt sağ',
    ],
    answer: 'üst sağ alt sol',
  },
  {
    id: 34,
    question:
      'Aşağıdaki css kurallarından hangisi bir metnin font büyüklüğünü piksel olarak değiştirmek için kullanılır?',
    choices: [
      'font-size:16px;',
      'font-size:1em;',
      'font-size:1cm;',
      'font-size:10mm;',
    ],
    answer: 'font-size:16px;',
  },
  {
    id: 35,
    question:
      'Aşağıdaki css kurallarından hangisi bir blok elementinin tüm kenarlarını 1px ebatında,kesik çizgi ve kırmızı yapmak için kullanılır?',
    choices: [
      'border: 1px solid red;',
      'border:1px double blue;',
      'border:1px dashed red;',
      'border:1px dotted red;',
    ],
    answer: 'border:1px dashed red;',
  },
  {
    id: 36,
    question:
      "Style etiketleri arasına elementleri sınıflandırarak verdiğimiz CSS kodlarındaki id'lere aşağıdaki işaretlerden hangisi ile ulaşırız ?",
    choices: ['#(hashtag/diyez)', '.(nokta)', '%', '+'],
    answer: '#(hashtag/diyez)',
  },
  {
    id: 37,
    question:
      'Aşağıdaki kenar çizgisi biçemlerinden hangisi noktalı çizgi oluşturur?',
    choices: ['solid', 'inset', 'dashed', 'dotted'],
    answer: 'dotted',
  },
  {
    id: 38,
    question:
      'Aşağıdaki kenar çizgisi biçemlerinden hangisi çift çizgi oluşturur?',
    choices: ['solid', 'double', 'dashed', 'dotted'],
    answer: 'double',
  },
  {
    id: 39,
    question:
      'Aşağıdakilerden hangi CSS kodu kutularımızın bulunduğu konuma göre sağdan, soldan, üstten, alttan konumlandırmamızı sağlar?',
    choices: [
      'position:center',
      'position:fixed',
      'position:relative',
      'position:absolute',
    ],
    answer: 'position:relative',
  },
  {
    id: 40,
    question:
      'CSS kodlarıyla border(kenarlık) biçimlendirirken sıralaması nasıldır?',
    choices: [
      'kalınlık, çizgi şekli, renk',
      'renk,kalınlık,çizgi şekli',
      'kalınlık,çizgi şekli,renk',
      'çizgi şekli,kalınlık,renk',
    ],
    answer: 'kalınlık, çizgi şekli, renk',
  },
  {
    id: 41,
    question: 'Aşağıdaki CSS kullanımlarından hangisi yanlıştır?',
    choices: [
      'color:blue;',
      'background-color:red;',
      'text-align=left;',
      'font-size:15px;',
    ],
    answer: 'text-align=left;',
  },
  {
    id: 42,
    question:
      ' CSS kullanarak yazı stilini italik yapmak için hangi kod kullanılmalı?',
    choices: [
      'font-style:italic;',
      'font-style:normal;',
      'font-weight:normal;',
      'font-weight:italic;',
    ],
    answer: 'font-style:italic;',
  },
  {
    id: 43,
    question:
      'CSS kullanarak satırlar arası boşluk değerini ayarlamak için hangi kod bloğu kullanılmalı?',
    choices: ['line-height', 'letter-spacing', 'font-height', 'font-size'],
    answer: 'line-height',
  },
  {
    id: 44,
    question:
      'CSS kullanarak harfler arası boşluk değerini ayarlamak için hangi kod bloğu kullanılmalı?',
    choices: ['line-height', 'letter-spacing', 'font-size', 'letter-height'],
    answer: 'letter-spacing',
  },
  {
    id: 45,
    question:
      'CSS kullanarak metnin kalınlık değerini ayarlamak için kullanılan kodlardan hangisi yanlıştır?',
    choices: [
      'font-weight:bold;',
      'font-weight:100;',
      'font-weight:900;',
      'font-weight:1000;',
    ],
    answer: 'font-weight:1000;',
  },
  {
    id: 46,
    question:
      ' Html belgesinin bölümüne yazılan ve bir defaya mahsus olmak üzere sadece yazıldığı yerde etkili olan stil şablon çeşidi aşağıdakilerden hangisidir?',
    choices: ['Yerel CSS', 'Genel CSS', 'Harici CSS', 'Hiçbiri'],
    answer: 'Yerel CSS',
  },
  {
    id: 47,
    question:
      'Aşağıdakilerden hangisi uzun RGB kodu ile heksadesimal renk belirlemeye örnektir?',
    choices: ['#RGB(125,124,245);', '#FCFCFC;', 'Black;', '#F00;'],
    answer: '#FCFCFC;',
  },
  {
    id: 48,
    question:
      'Aşağıdakilerden hangisi elemanımızı yatay olarak sayfamızda ortalayan CSS kodunu içerir?',
    choices: [
      'padding:0 auto',
      'site-align:center',
      'margin:center',
      'margin:0 auto',
    ],
    answer: 'margin:0 auto',
  },
  {
    id: 49,
    question:
      'Aşağıdaki flex kavramlarından hangisinin eşleşmesi doğru yapılmıştır?',
    choices: [
      'cross-start : Flex yapılmış birden çok eleman',
      'main-axis : yatay eksen',
      'cross-axis : dikey eksen',
      'flex-item : yatay eksen',
    ],
    answer: 'cross-axis : dikey eksen',
  },
  {
    id: 50,
    question: 'Kenar içi sol boşluğu, hangi özellik yardımıyla ayarlanır?',
    choices: ['margin-left', 'padding-left', 'left-margin', 'left-padding'],
    answer: 'padding-left',
  },
  {
    id: 51,
    question:
      ' İnternet adreslerinde görülen kısaltmalardan aşağıdakilerden hangisi eğitim kurumlarını ifade eder?',
    choices: ['.edu', '.gov', '.mil', '.net'],
    answer: '.edu',
  },
  {
    id: 52,
    question: 'Aşağıdakilerden hangisi bir web taraycı çeşidi değildir?',
    choices: ['Ipad', 'Firefox', 'Chrome', 'Internet Explorer'],
    answer: 'Ipad',
  },
  {
    id: 53,
    question:
      ' Sayfalarımızın en başında dokümanımızın tipini belirlemeye yarayan etiket hangisidir?',
    choices: ['Style', 'Meta', 'Head', '!Doctype'],
    answer: '!Doctype',
  },
  {
    id: 54,
    question:
      'Zemin görseli olarak eklediğimiz bir resmin en üstte ve solda olması için hangi özellik ve değere sahip olması gerekir?',
    choices: [
      'background-position:center left;',
      'background-position:bottom left;',
      'background-position:top right;',
      'background-position:top left;',
    ],
    answer: 'background-position:top left;',
  },
  {
    id: 55,
    question:
      'Bilgisayarların birbirleri ile iletişim kurmalarını sağlayan protokol aşağıdakilerden hangisidir?',
    choices: ['DNS', 'IP', 'HTML', 'XML'],
    answer: 'IP',
  },
  {
    id: 56,
    question: 'Browser (tarayıcı) program ne işe yarar?',
    choices: [
      'İnternet bağlantısını hızlandırır.',
      'İnternete bağlantı sağlar.',
      'İnternet sayfalarını bilgisayarımızda görmeyi sağlar.',
      'Kâğıt üzerindeki yazıları bilgisayara aktarır.',
    ],
    answer: 'İnternet sayfalarını bilgisayarımızda görmeyi sağlar.',
  },
  {
    id: 57,
    question:
      'Mouse ile resmin üzerine gelindiğinde istenilen bir mesajın çıkmasını sağlayan HTML parametresi hangisidir?',
    choices: ['alt', 'value', 'src', 'top'],
    answer: 'alt',
  },
  {
    id: 58,
    question: 'Aşağıdaki CSS söz dizimlerinden hangisi doğrudur?',
    choices: [
      'p (color:red; text-align:center;)',
      'p {color:red; text-align:center;}',
      'p {color-red; text-align-center}',
      'p {color:red: text-align:center};',
    ],
    answer: 'p {color:red; text-align:center;}',
  },
  {
    id: 59,
    question:
      " Aşağıdakilerden hangisi CSS'te açıklama (pasif) satırı işaretidir?",
    choices: [
      '<< Açıklama Satırı >>',
      '/* Açıklama Satırı */',
      '# Açıklama Satırı #',
      '/ Açıklama Satırı /',
    ],
    answer: '/* Açıklama Satırı */',
  },
  {
    id: 60,
    question:
      ' CSS ile .bgfl10 classına sahip bir div’e nasıl Mavi rengi arka plan atayabiliriz?',
    choices: [
      'div.bgfl10{background:blue}',
      '.bgfl10{background-color:blue}',
      '.bgfl10{background:blue}',
      '#bgfl10{background-color:blue}',
    ],
    answer: '.bgfl10{background-color:blue}',
  },
  {
    id: 61,
    question:
      ' Aşağıdaki özelliklerden hangisi “arka.jpg” görselini, zemin resmi yapmaya yarar?',
    choices: [
      'bg-image:url( „arka.jpg‟);',
      'back-image:url( „arka.jpg‟);',
      'bground-image:url( „arka.jpg‟);',
      'background-image:url( „arka.jpg‟);',
    ],
    answer: 'background-image:url( „arka.jpg‟);',
  },
  {
    id: 62,
    question:
      'Bağlantıların altındaki çizgiyi kaldırmak için aşağıdaki hangi özellik ve değeri kullanılır?',
    choices: [
      'text-trans:none;',
      'text-transformation:none;',
      'text-decoration:none;',
      'text-decor:none;',
    ],
    answer: 'text-decoration:none;',
  },
  {
    id: 63,
    question:
      'Aşağıdakilerden hangisi bir metindeki kelimelerin ilk harfini büyük harfe çevirir?',
    choices: [
      'text-transform:bigcase;',
      'text-transform:lowercase;',
      'text-transform:capitalize;',
      'text-transform:uppercase;',
    ],
    answer: 'text-transform:capitalize;',
  },
  {
    id: 64,
    question:
      ' Aşağıdakilerden hangisi bir metindeki kelimelerin arasındaki mesafeyi ayarlamaya yarar?',
    choices: ['letter-spacing', 'word-spacing', 'word-space', 'word-width'],
    answer: 'word-spacing',
  },
  {
    id: 65,
    question:
      'Aşağıdakilerden hangisi p etiketinin uygulandığı tüm metinleri kalın (koyu) yapar?',
    choices: [
      'p {font-weight:bold}',
      'p {text-size:bold}',
      "p style='text-size:bold'",
      "p style='font-size:bold'",
    ],
    answer: 'p {font-weight:bold}',
  },
  {
    id: 66,
    question:
      'Aşağıdakilerden hangisi üst kenar çizgisi kalınlığını 5 px, alt kenar çizgisi kalınlığını 4 px, sol kenar çizgisi kalınlığını 3 px, sağ kenar çizgisi kalınlığını 2 px yapar?',
    choices: [
      'border-width:5px 4px 3px 2px',
      'border-width:4px 5px 3px 2px',
      'border-width:5px 3px 4px 2px',
      'border-width:5px 2px 4px 3px',
    ],
    answer: 'border-width:5px 2px 4px 3px',
  },
  {
    id: 67,
    question: 'Ögeleri konumlandırırken konumunu nasıl göreceli yaparız?',
    choices: [
      'position:fixed;',
      'position:absolute;',
      'position:relative;',
      'position:mixed;',
    ],
    answer: 'position:relative;',
  },
  {
    id: 68,
    question:
      'Üst üste çakışan ögelerin hangisinin altta, hangisinin üstte olacağını hangi özelliği kullanarak ayarlarız?',
    choices: ['k-index', 'z-index', 'v-index', 'n-index'],
    answer: 'z-index',
  },
  {
    id: 69,
    question: ' Ögeleri konumlandırırken konumunu nasıl sabit yaparız?',
    choices: [
      'position:fixed;',
      'position:absolute;',
      'position:relative;',
      'position:mixed;',
    ],
    answer: 'position:fixed;',
  },
  {
    id: 70,
    question:
      'font-weight: bold; font-family: verdana, sans-serif; font-size: 12px; line-height: 15px; Yukarıda verilen font özelliklerinin kısaltılmış hali aşağıdakilerden hangisidir?',
    choices: [
      'font: bold 12px/15px verdana, sans-serif;',
      'font: bold 15px/12px verdana, sans-serif;',
      'font: 12px/15px bold verdana, sans-serif;',
      'font: verdana, sans-serif 12px/15px bold',
    ],
    answer: 'font: bold 12px/15px verdana, sans-serif;',
  },
  {
    id: 71,
    question:
      'Menülerde menünün üzerine geldiğimizde özelliklerinin değişmesi için kullandığımız etiket hangisidir?',
    choices: ['a:active', 'a:blank', 'a:visited', 'a:hover'],
    answer: 'a:hover',
  },
  {
    id: 72,
    question:
      ' Yatay menü yaparken display özelliğine hangi değer verilmelidir?',
    choices: ['inline', 'left', 'block', 'bloke'],
    answer: 'inline',
  },
  {
    id: 73,
    question:
      'Dikey menü yaparken display özelliğine hangi değer verilmelidir?',
    choices: ['block', 'inline', 'lastline', 'bloke'],
    answer: 'block',
  },
  {
    id: 74,
    question:
      'Yatay açılır menü yaparken float özelliğine hangi değer verilmelidir?',
    choices: ['top', 'left', 'center', 'right'],
    answer: 'left',
  },
  {
    id: 75,
    question: `
font-weight: bold;
font-family: verdana, sans-serif;
font-size: 12px;
line-height: 15px;

Yukarıda verilen font özelliklerinin kısaltılmış hali aşağıdakilerden hangisidir?`,
    choices: [
      'font: bold 12px/15px verdana, sans-serif;',
      'font: bold 15px/12px verdana, sans-serif;',
      'font: 12px/15px bold verdana, sans-serif;',
      'font: verdana, sans-serif 12px/15px bold;',
    ],
    answer: 'font: bold 12px/15px verdana, sans-serif;',
  },
  {
    id: 76,
    question:
      'Aşağıdaki uzunluk birimlerinden hangisi göreceli (bağıl) uzunluk birimlerindendir?',
    choices: ['cm', 'em', 'in', 'pt'],
    answer: 'em',
  },
  {
    id: 77,
    question:
      'Harici (bağlantılı) CSS kullanımında stil şablonumuzun yolu nerede belirtilir?',
    choices: [
      '<body> etiketi içinde',
      'Sayfamızın en başında',
      'Sayfamızın en sonunda',
      'head etiketleri arasında',
    ],
    answer: 'head etiketleri arasında',
  },
  {
    id: 78,
    question: ' Renk kodlarından olan RGB açılımı nedir?',
    choices: [
      'Real Grease Bad',
      'Red Great Blue',
      'Red Green Blue',
      'Rose Greedy Blume',
    ],
    answer: 'Red Green Blue',
  },
  {
    id: 79,
    question:
      'Linkin tıklanması durumunda sayfanın yeni sekmede açılmasını sağlayan HTML parametresi aşağıdakilerden hangisidir?',
    choices: [
      'target=”_top”',
      'target=”_tab”',
      'target=”_itself”',
      'target=”_blank”',
    ],
    answer: 'target=”_blank”',
  },
  {
    id: 80,
    question:
      'Html’de onay kutusu oluşturmak için kullanılan etiket hangisidir ?',
    choices: [
      '< checkbox>',
      '< input=checkbox>',
      "< input type='checkbox'>",
      '< input checkbox>',
    ],
    answer: "< input type='checkbox'>",
  },
  {
    id: 81,
    question:
      'Aşağıdakilerden hangi CSS özelliği hangisi elemanı sayfada gizler, sayfada gözükmemesini sağlar?',
    choices: [
      'display:flex',
      'display:none',
      'display:block',
      'display:inline',
    ],
    answer: 'display:none',
  },
  {
    id: 82,
    question:
      'Aşağıdaki flexbox özelliklerinden hangisi elemanlarımızın dikey olarak dizilmesini sağlar?',
    choices: [
      'display:flex-reverse',
      'flex-direction:row',
      'flex-direction:column',
      'flex-wrap:wrap',
    ],
    answer: 'flex-direction:column',
  },
  {
    id: 83,
    question:
      'Aşağıdakilerden hangisi kutu içerisinde taşan içeriğin gizlenmesini sağlar?',
    choices: [
      'display:none',
      'overflow:scroll',
      'overflow:visible',
      'overflow:hidden',
    ],
    answer: 'overflow:hidden',
  },
  {
    id: 84,
    question:
      'Aşağıdakilerden hangisi HTML elemanının sadece tüm satırı kapsadığını gösteren display değeridir?',
    choices: ['flex', 'inline-block', 'block', 'inline'],
    answer: 'block',
  },
  {
    id: 85,
    question:
      " Aşağıdakilerden hangisi ziyaret edilmemiş linkleri seçen pseudo-class'ıdır?",
    choices: [':hover', ':visited', ':link', ':first-child'],
    answer: ':link',
  },
  {
    id: 86,
    question:
      'Aşağıdakilerden hangisi flex itemlarımızı flex kutusuna sığmadığı zaman sonraki satıra alacak özelliği ve değeri içerir?',
    choices: ['flex:1', 'flex-direction:column', 'flex:no-wrap', 'flex:wrap'],
    answer: 'flex:wrap',
  },
  {
    id: 87,
    question:
      'Aşağıdakilerden hangi özellik flex itemlara kendi belirlediğimiz düzene sıralanmasını sağlayan özelliktir?',
    choices: ['order', 'flex-grow', 'align-self', 'flex-wrap'],
    answer: 'order',
  },
  {
    id: 88,
    question:
      'Kutu Modellerini oluşturan 4 kavramımız var. Aşağıda bu verilen 4 kavramdan hangisi doğru şekilde eşleştirilmiştir?',
    choices: [
      'Padding - İç Aralık',
      'Border - Dış Aralık',
      'Margin - İçerik',
      'Content - Kenarlık',
    ],
    answer: 'Padding - İç Aralık',
  },
]
