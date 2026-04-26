// （add-btn）というIDをhｔｍｌのページの中から探して、要素をaddBtnと紐づける。
const addBtn=document.getElementById("add-btn");
// （todo-input）というIDをhｔｍｌのページの中から探して、要素をinputと紐づける。
const input=document.getElementById("todo-input");
// （todo-list）というIDをhｔｍｌのページの中から探して、要素をlistと紐づける。
const list=document.getElementById("todo-list");
// クリックすると関数が実行される
// 追加ボタンがクリックされるまで待機、クリックされたら、function以下の関数が実行される
addBtn.addEventListener("click",function(){
    // 入力欄の中身をテキストとして抜き出す。ユーザーが入力欄へ入力したテキストを(text)の箱へ入れる。
    const text=input.value;
    // textが空欄の時は、関数が終了する。（下の、リストに追加する部分が実行されない。）
    if(text==="")return;
    // htmlのページの中にliタグ（要素）を作る。空のリストという部品を作る。まだ画面には反映されず、メモリの中に部品だけできる。
    const li=document.createElement("li");
    // 上で作った空のリストのテキスト欄に、ユーザーが入力欄へと入力したテキストを入れる。
    li.textContent=text;
    // 削除ボタンの追加
    // ボタンの部品を作ってremoveBtnの箱に入れる
    const removeBtn=document.createElement("button")
    // リストのプレートの末尾に削除ボタンを表示
    li.appendChild(removeBtn);
    // 削除ボタンに（削除）の文字を表示
    removeBtn.textContent="削除";
    // 削除ボタンがクリックされたら関数を実行
    removeBtn.addEventListener("click",function(){
        // リストを削除
        li.remove();
    })
    // タスクがクリックされたら、完了の印の線を引く関数を実行させる
    li.addEventListener("click",function(){
        // タスクのクラスに(done)を追加したり外したりする。doneクラスが付くと、CSSが自動で線を引く。
        li.classList.toggle("done")
    })
    // リストの一番後ろに、上のテキストを入力したリストをはめ込む。リストの箱（親、ul）の末尾に新しいリスト（子、li）を追加。
    list.appendChild(li);
    // 入力欄を空にする。入力欄の文字を空白（""）で上書き。
    input.value="";
});
