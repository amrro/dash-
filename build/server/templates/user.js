var Handlebars = require("handlebars/runtime");module.exports = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<tr>\n    <td>"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n    <td>System Architect</td>\n    <td>Edinburgh</td>\n    <td>61</td>\n    <td>2011/04/25</td>\n    <td>$320,800</td>\n</tr>";
},"useData":true});