package com.spring.controllers;


import java.util.UUID;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.spring.daos.ClienteDao;
import com.spring.daos.ColaboradorDao;
import com.spring.daos.FitaDao;
import com.spring.daos.LocacaoDao;
import com.spring.models.Cliente;
import com.spring.models.Locacao;

@Controller
public class ControllerLocacao {

	@RequestMapping (value = "locacao", method = RequestMethod.GET )
	public String novaLocacao(Model model) {	
		
		try {
			model.addAttribute("fitaList", FitaDao.TodasFitas());
			model.addAttribute("colaboradorList", ColaboradorDao.TodosColaboradores());
			model.addAttribute("clienteList", ClienteDao.TodosClientes());
			model.addAttribute("locacaoList", LocacaoDao.TodasLocacoes());
			model.addAttribute("locacao",new Locacao());
		}catch(Exception e) {
			
		}

		return "locacao";
	}
	
	@RequestMapping (value="locacao", method = RequestMethod.POST)
	public String salvar(@ModelAttribute Locacao locacao, Model model)  {
		
		try {
			LocacaoDao.AdicionarLocacao(locacao);
		}catch(Exception e) {
			System.out.println(e);
		}
		
		return "redirect:/locacao";
	}
	
	@RequestMapping (value="atualizarlocacao", method = RequestMethod.POST)
	public String editar(@ModelAttribute Locacao locacao, Model model) {

		try {
			LocacaoDao.AtualizarLocacao(locacao);
		}catch(Exception e) {
			
		}
		
		return "redirect:/locacao";
	}
	
	@RequestMapping (value="deletarlocacao", method = RequestMethod.POST)
	public String excluir(@ModelAttribute Locacao locacao, Model model) {

		try {
			LocacaoDao.RemoverLocacao(locacao);
		}catch(Exception e) {
			
		}
		
		
		return "redirect:/locacao";
	}
}
