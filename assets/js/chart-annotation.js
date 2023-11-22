/*!
 * Chart.Annotation.js
 * http://chartjs.org/
 * Version: 0.1.1
 *
 * Copyright 2016 Evert Timberg
 * Released under the MIT license
 * https://github.com/chartjs/Chart.Annotation.js/blob/master/LICENSE.md
 */
!function t(o,n,r){function e(i,s){if(!n[i]){if(!o[i]){var f="function"==typeof require&&require;if(!s&&f)return f(i,!0);if(a)return a(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[i]={exports:{}};o[i][0].call(d.exports,function(t){var n=o[i][1][t];return e(n?n:t)},d,d.exports,t,o,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)e(r[i]);return e}({1:[function(t,o,n){},{}],2:[function(t,o,n){o.exports=function(t){function o(t){return!isNaN(t)&&isFinite(t)}function n(t,n,r){var e,a,i=t._model=t._model||{},s=r.scales[n.xScaleID],f=r.scales[n.yScaleID],l=r.chartArea,d=l.left,u=l.top,c=l.right,h=l.bottom;s&&(e=o(n.xMin)?s.getPixelForValue(n.xMin):l.left,a=o(n.xMax)?s.getPixelForValue(n.xMax):l.right,d=Math.min(e,a),c=Math.max(e,a)),f&&(e=o(n.yMin)?f.getPixelForValue(n.yMin):l.bottom,a=o(n.yMax)?f.getPixelForValue(n.yMax):l.top,u=Math.min(e,a),h=Math.max(e,a)),i.left=d,i.top=u,i.right=c,i.bottom=h,i.borderColor=n.borderColor,i.borderWidth=n.borderWidth,i.backgroundColor=n.backgroundColor}var r=t.Element.extend({draw:function(t){var o=this._view;t.lineWidth=o.borderWidth,t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor;var n=o.right-o.left,r=o.bottom-o.top;t.fillRect(o.left,o.top,n,r),t.strokeRect(o.left,o.top,n,r)}});return{Constructor:r,update:n}}},{}],3:[function(t,o,n){var r=t("chart.js");r="function"==typeof r?r:window.Chart;var e=r.helpers,a=e.isArray;r.Annotation=r.Annotation||{};var i=(r.Annotation.defaults={drawTime:"afterDraw",annotations:[]},t("./line.js")(r)),s=t("./box.js")(r),f=r.Annotation.annotationTypes={line:i.Constructor,box:s.Constructor},l=r.Annotation.updateFunctions={line:i.update,box:s.update},d=(r.Annotation.drawTimeOptions={afterDraw:"afterDraw",afterDatasetsDraw:"afterDatasetsDraw",beforeDatasetsDraw:"beforeDatasetsDraw"},r.PluginBase.extend({beforeInit:function(t){var o=t.options;o.annotation=e.configMerge(r.Annotation.defaults,o.annotation);var n=o.annotation.annotations;if(a(n)){var i=t._annotationObjects=[];n.forEach(function(t,o){var n=f[t.type];n&&i.push(new n({_index:o}))})}},afterScaleUpdate:function(t){var o=t._annotationObjects,n=t.options.annotation;a(o)&&o.forEach(function(o,r){var e=n.annotations[o._index],a=l[e.type];a&&a(o,e,t)})},afterDraw:function(t,o){this.drawAnnotations(r.Annotation.drawTimeOptions.afterDraw,t,o)},afterDatasetsDraw:function(t,o){this.drawAnnotations(r.Annotation.drawTimeOptions.afterDatasetsDraw,t,o)},beforeDatasetsDraw:function(t,o){this.drawAnnotations(r.Annotation.drawTimeOptions.beforeDatasetsDraw,t,o)},drawAnnotations:function(t,o,n){var r=o.options.annotation;if(r.drawTime==t){var e=o._annotationObjects;if(a(e)){var i=o.chart.ctx;e.forEach(function(t){t.transition(n).draw(i)})}}}}));o.exports=d,r.pluginService.register(new d)},{"./box.js":2,"./line.js":4,"chart.js":1}],4:[function(t,o,n){o.exports=function(t){function o(t,o,r){var e=t._model=t._model||{},a=r.scales[o.scaleID],i=a?a.getPixelForValue(o.value):NaN,s=r.chartArea;isNaN(i)||(o.mode==n?(e.x1=s.left,e.x2=s.right,e.y1=e.y2=i):(e.y1=s.top,e.y2=s.bottom,e.x1=e.x2=i)),e.borderColor=o.borderColor,e.borderWidth=o.borderWidth,e.borderDash=o.borderDash||[],e.borderDashOffset=o.borderDashOffset||0}var n="horizontal",r=t.Element.extend({draw:function(t){var o=this._view;t.save(),t.lineWidth=o.borderWidth,t.strokeStyle=o.borderColor,t.setLineDash&&t.setLineDash(o.borderDash),t.lineDashOffset=o.borderDashOffset,t.beginPath(),t.moveTo(o.x1,o.y1),t.lineTo(o.x2,o.y2),t.stroke(),t.restore()}});return{Constructor:r,update:o}}},{}]},{},[3]);