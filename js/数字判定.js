/*
  参考サイト : http://d.hatena.ne.jp/sandai/20100206/p1
  isFinite関数
  引数が NaN、正の無限大、または負の無限大である場合、このメソッドは false を返し、そうでない場合は true を返します。
 */

 var arg = 1;

 isFinite(arg); // true

 arg = NaN;

 isFinite(arg); // false