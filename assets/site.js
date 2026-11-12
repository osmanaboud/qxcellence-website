document.addEventListener('DOMContentLoaded',()=>{const menu=document.querySelector('.menu');if(menu){menu.addEventListener('click',()=>{const nav=document.querySelector('nav');if(nav)nav.style.display=nav.style.display==='block'?'none':'block'})}if(document.getElementById('questions'))buildAssessment()});
const questions=[
"Quality objectives are clearly aligned with project/business objectives.","Quality governance roles, accountabilities and decision rights are clearly defined.","The QMS is implemented consistently rather than existing mainly as documentation.","Quality risks are identified, assessed and actively managed.","Inspection and test planning is risk-based and proportionate to criticality.","Design quality and constructability risks are addressed early.","Supplier/subcontractor quality performance is actively managed.","Materials and equipment have effective approval, traceability and control.","NCRs are analyzed for systemic causes, not only closed individually.","Corrective and preventive actions are verified for effectiveness.","Internal audits provide useful assurance and improvement insight.","Management reviews use reliable quality and performance data.","Quality KPIs include leading indicators as well as lagging indicators.","Quality trends are visible to project and executive leadership.","Lessons learned are captured and applied to future work.","Digital tools support field inspections and quality evidence.","Quality data is accessible, structured and suitable for analysis.","Teams have the capability and training needed to deliver right-first-time work.","Quality professionals influence decisions beyond inspection and compliance.","Cross-functional collaboration between quality, engineering, construction and commercial teams is effective.","Commissioning, testing and handover quality are planned from early stages.","Quality is integrated into risk, change and project controls.","The organization uses continuous improvement methods to remove recurring problems.","Leadership visibly reinforces quality ownership and accountability.","There is a defined roadmap for quality transformation, digitalization or Quality 4.0."
];

function handleContact(e) {
  e.preventDefault();

  const f = e.target;

  const subject = encodeURIComponent(
    'QXcellence Consultation Enquiry'
  );

  const body = encodeURIComponent(
    `Name: ${f.name.value}
Email: ${f.email.value}
Organization: ${f.organization.value}

Enquiry:
${f.message.value}`
  );

  const status = document.getElementById('form-status');

  if (status) {
    status.textContent =
      'Opening your email application to send the enquiry.';
  }

  window.location.href =
    `mailto:info@qxcellence.co?subject=${subject}&body=${body}`;

  return false;
}
