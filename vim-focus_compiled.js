if(!lt.util.load.provided_QMARK_('lt.plugins.vim-focus')) {
goog.provide('lt.plugins.vim_focus');
goog.require('cljs.core');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');

/**
* Given LT editor object 'e', return its corresponding CodeMirror
* HTMLTextArea DOM element
*/
lt.plugins.vim_focus.editor__GT_textarea = (function editor__GT_textarea(e){var elem = lt.objs.editor.__GT_elem.call(null,e);var div = cljs.core.first.call(null,elem.children);var text = cljs.core.first.call(null,div.children);return text;
});

/**
* Given LT editor object 'e', return true if it's a Vim editor in insert-mode
*/
lt.plugins.vim_focus.vim_insert_editor_QMARK_ = (function vim_insert_editor_QMARK_(e){return cljs.core._EQ_.call(null,"vim-insert",lt.objs.editor.option.call(null,e,new cljs.core.Keyword(null,"keyMap","keyMap",4174180847)));
});

/**
* Given CodeMirror HTMLTextArea DOM element 'elem' send it a DOM event
* corresponding to the user pressing escape
*/
lt.plugins.vim_focus.send_escape_key = (function send_escape_key(elem){var evt = document.createEvent("Events");evt.initEvent("keydown",lt.plugins.vim_focus.rue,true);
evt.keyCode = 27;
evt.which = 27;
return elem.dispatchEvent(evt);
});

/**
* Return a sequence of LT editor objects that are in Vim insert-mode
*/
lt.plugins.vim_focus.target_editors = (function target_editors(){return cljs.core.filter.call(null,lt.plugins.vim_focus.vim_insert_editor_QMARK_,lt.objs.editor.pool.get_all.call(null));
});

/**
* Given LT editor object 'e', send it an emulated escape keypress to return
* it to vim normal mode
*/
lt.plugins.vim_focus.escape_to_normal_mode = (function escape_to_normal_mode(e){return lt.plugins.vim_focus.send_escape_key.call(null,lt.plugins.vim_focus.editor__GT_textarea.call(null,e));
});

/**
* Switch any LT editors in Vim insert-mode to normal-mode
*/
lt.plugins.vim_focus.switch_vim_editors_to_normal_mode = (function switch_vim_editors_to_normal_mode(){var seq__8905 = cljs.core.seq.call(null,lt.plugins.vim_focus.target_editors.call(null));var chunk__8906 = null;var count__8907 = 0;var i__8908 = 0;while(true){
if((i__8908 < count__8907))
{var e = cljs.core._nth.call(null,chunk__8906,i__8908);lt.plugins.vim_focus.escape_to_normal_mode.call(null,e);
{
var G__8919 = seq__8905;
var G__8920 = chunk__8906;
var G__8921 = count__8907;
var G__8922 = (i__8908 + 1);
seq__8905 = G__8919;
chunk__8906 = G__8920;
count__8907 = G__8921;
i__8908 = G__8922;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8905);if(temp__4092__auto__)
{var seq__8905__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8905__$1))
{var c__8206__auto__ = cljs.core.chunk_first.call(null,seq__8905__$1);{
var G__8923 = cljs.core.chunk_rest.call(null,seq__8905__$1);
var G__8924 = c__8206__auto__;
var G__8925 = cljs.core.count.call(null,c__8206__auto__);
var G__8926 = 0;
seq__8905 = G__8923;
chunk__8906 = G__8924;
count__8907 = G__8925;
i__8908 = G__8926;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__8905__$1);lt.plugins.vim_focus.escape_to_normal_mode.call(null,e);
{
var G__8927 = cljs.core.next.call(null,seq__8905__$1);
var G__8928 = null;
var G__8929 = 0;
var G__8930 = 0;
seq__8905 = G__8927;
chunk__8906 = G__8928;
count__8907 = G__8929;
i__8908 = G__8930;
continue;
}
}
} else
{return null;
}
}
break;
}
});

lt.plugins.vim_focus.__BEH__lt_focus_lost = (function __BEH__lt_focus_lost(this$){return lt.plugins.vim_focus.switch_vim_editors_to_normal_mode.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vim-focus","lt-focus-lost","lt.plugins.vim-focus/lt-focus-lost",3577787435),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vim_focus.__BEH__lt_focus_lost,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blur","blur",1016931289),null], null), null));

}

//# sourceMappingURL=