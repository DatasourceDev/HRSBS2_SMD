/*
dhtmlxScheduler v.4.3.0 Professional Evaluation

This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
Scheduler.plugin(function(e){e.form_blocks.multiselect={render:function(e){for(var t="<div class='dhx_multi_select_"+e.name+"' style='overflow: auto; height: "+e.height+"px; position: relative;' >",a=0;a<e.options.length;a++)t+="<label><input type='checkbox' value='"+e.options[a].key+"'/>"+e.options[a].label+"</label>",convertStringToBoolean(e.vertical)&&(t+="<br/>");return t+="</div>"},set_value:function(t,a,n,i){function r(e){for(var a=t.getElementsByTagName("input"),n=0;n<a.length;n++)a[n].checked=!!e[a[n].value]
}for(var s=t.getElementsByTagName("input"),d=0;d<s.length;d++)s[d].checked=!1;var _={};if(n[i.map_to]){for(var o=(n[i.map_to]+"").split(","),d=0;d<o.length;d++)_[o[d]]=!0;r(_)}else{if(e._new_event||!i.script_url)return;var l=document.createElement("div");l.className="dhx_loading",l.style.cssText="position: absolute; top: 40%; left: 40%;",t.appendChild(l),dhtmlxAjax.get(i.script_url+"?dhx_crosslink_"+i.map_to+"="+n.id+"&uid="+e.uid(),function(e){for(var a=e.doXPath("//data/item"),n={},s=0;s<a.length;s++)n[a[s].getAttribute(i.map_to)]=!0;
r(n),t.removeChild(l)})}},get_value:function(e){for(var t=[],a=e.getElementsByTagName("input"),n=0;n<a.length;n++)a[n].checked&&t.push(a[n].value);return t.join(",")},focus:function(){}}});