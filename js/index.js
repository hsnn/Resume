function getId (myid) {
    return document.getElementById(myid);
};
function getClass (myclass) {
    return document.getElementsByClassName(myclass);
};
function getName (myname) {
    return document.getElementsByTagName(myname);
};
function removeClass(obj, cls){
    if (hasClass(obj,cls)===true){ //��������class
        var obj_class = ' '+obj.className+' ';//��ȡ class ����, ������β����һ���ո�. ex) 'abc        bcd' -> ' abc        bcd '
        obj_class = obj_class.replace(/(\s+)/gi, ' '),//������Ŀ��ַ��滻��һ���ո�. ex) ' abc        bcd ' -> ' abc bcd '
        removed = obj_class.replace(' '+cls+' ', ' ');//��ԭ���� class �滻����β���˿ո�� class. ex) ' abc bcd ' -> 'bcd '
        removed = removed.replace(/(^\s+)|(\s+$)/g, '');//ȥ����β�ո�. ex) 'bcd ' -> 'bcd'
        obj.className = removed;//�滻ԭ���� class.  
    }
}
function addClass(obj, cls) {
    if (hasClass(obj, cls)===false){ //���û�����class
        var obj_class = obj.className, //��ȡ��ǰclass
        added = obj_class + " " + cls;//ƴ��class �ÿո����
        obj.className = added;
    }
}
function hasClass(obj, cls){
    obj_class_lst = obj.className.split(/\s+/);//ͨ��split���ַ���clsת��������.
    x = 0;
    for(x in obj_class_lst) {
        if(obj_class_lst[x] == cls) {//ѭ������, �ж��Ƿ����cls
            return true;
        }
    }
    return false;
}