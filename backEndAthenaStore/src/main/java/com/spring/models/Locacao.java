package com.spring.models;

import java.util.UUID;

public class Locacao {
	private int id;
	private int cliente;
	private int fita;
	private int colaborador;
	
	public Locacao() {
		super();

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getCliente() {
		return cliente;
	}

	public void setCliente(int cliente) {
		this.cliente = cliente;
	}

	public int getFita() {
		return fita;
	}

	public void setFita(int fita) {
		this.fita = fita;
	}

	public int getColaborador() {
		return colaborador;
	}

	public void setColaborador(int colaborador) {
		this.colaborador = colaborador;
	}
	
	
}
